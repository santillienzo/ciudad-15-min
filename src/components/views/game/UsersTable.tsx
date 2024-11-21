import { db } from "@/lib/firebaseConfig";
import { UserData } from "@/lib/types/user.types";
import { Skeleton, TableContainer } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import { useReactToPrint } from "react-to-print";
import { Dialog, DialogTitle, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { resetAllUserLocationsVisited } from "@/lib/userActions";
import { toast } from "sonner";

const UsersTable = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [openModalReset, setOpenModalReset] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpenModalReset = () => {
    setOpenModalReset(true);
  }

  const handleCloseModalReset = () => {
    setOpenModalReset(false);
  }

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({
    contentRef,
  });

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, "users");
        const usersSnapshot = await getDocs(usersRef);
        const filteredUsers: UserData[] = [];

        usersSnapshot.forEach((doc) => {
          
          const userData = doc.data() as UserData;

            filteredUsers.push({
              ...userData,
              id: doc.id, // Agrega el ID del documento
            });
        });

        setUsers(filteredUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleResetAllUserLocationsVisited = async () => {
    const resetedUsersPromise = resetAllUserLocationsVisited();

    toast.promise(resetedUsersPromise, {
      loading: 'Reiniciando ubicaciones...',
      success: (resetedUsers) => {
        setUsers(resetedUsers);
        handleCloseModalReset();
        return 'Ubicaciones reiniciadas correctamente';
      },
      error: (error) => {
        return error.message;
      }
    });
  }

  return (
    <Box className="flex justify-center bg-background-secondary min-h-screen">
      {loading ? (
        <Skeleton height="125px" width="100%" borderRadius="xl" />
      ) : (
        <Box
          width="100%"
          maxWidth="auto"
        >
          <Box className="w-full flex justify-end p-4 gap-4">
            <button
              onClick={() => reactToPrintFn()}
              className="bg-background-primary text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-all"
            >
              <span>Imprimir PDF</span>
            </button>
            <button onClick={handleOpenModalReset} className="bg-red-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-opacity-90 transition-all">
              <span>Resetear ubicaciones</span>
            </button>
          </Box>

          <TableContainer
            className="w-full"
            overflowY="auto"
            ref={contentRef}
          >
            <Table
              size="xl"
              variant="striped"
              className="w-full max-xl:overflow-x-auto max-sm:overflow-x-auto py-8"
            >
              <Thead
                className="text-background-primary-foreground"
                height={"3rem"}
              >
                <Tr
                  className="bg-collapsable-primary"
                  position="sticky"
                  top={0}
                  zIndex={1}
                >
                  <Th maxWidth="50px">N°</Th>
                  {/* <Th maxWidth="70px">Registrado</Th> */}
                  <Th>Nombre</Th>
                  <Th>Apellido</Th>
                  <Th>DNI</Th>
                  <Th>Email</Th>
                </Tr>
              </Thead>
              <Tbody className="text-gray-800 bg-background-primary-foreground">
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <Tr key={user.id}>
                      <Td className="p-3 text-center border-y border-gray-800 overflow-hidden" maxWidth="50px">
                        {index + 1}
                      </Td>
                      {/* <Td className="p-3 text-center border-y border-gray-800 overflow-hidden" maxWidth="70px">
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '-'}
                      </Td> */}
                      <Td className="p-3 text-center border-y border-gray-800">
                        {user.name}
                      </Td>
                      <Td className="p-3 text-center border-y border-gray-800">
                        {user.lastname}
                      </Td>
                      <Td className="p-3 text-center border-y border-gray-800">
                        {user.dni}
                      </Td>
                      <Td className="p-3 text-center border-y border-gray-800 text-sm">
                        {user.email}
                      </Td>
                    </Tr>
                  ))
                ) : (
                  <Tr>
                    <Td colSpan={7} textAlign="center" className="text-red-800">
                      Oops! Parece que no tiene usuarios registrados u ocurrió
                      un error inesperado.
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
    <Dialog open={openModalReset} onOpenChange={setOpenModalReset}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirmar acción</DialogTitle>
          <DialogDescription>
            ¿Está seguro que desea reiniciar el juego de todos los usuarios registrados? Esta acción no se puede deshacer.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="button" variant="secondary" onClick={handleCloseModalReset}>
            Cancelar
          </Button>
          <Button type="button" variant="destructive" onClick={handleResetAllUserLocationsVisited}>
            Reiniciar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </Box>
  );
};

export default UsersTable;
