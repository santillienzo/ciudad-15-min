import { db, auth } from "@/lib/firebaseConfig";
import { UserData } from "@/lib/types/user.types";
import { Skeleton, TableContainer } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

const UsersTable = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const usersRef = collection(db, "users");
        const usersSnapshot = await getDocs(usersRef);
        const filteredUsers: UserData[] = [];

        usersSnapshot.forEach((doc) => {
          const userData = doc.data() as UserData;
          const user = auth.currentUser;
          if (user) {
            // const metadata = user.metadata;
            filteredUsers.push({
              ...userData,
              id: doc.id, // Agrega el ID del documento
              // creationTime: new Date(metadata.creationTime).toLocaleString(),
              // lastSignInTime: new Date(metadata.lastSignInTime).toLocaleString(),
            });
          }
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

  return (
    <Box className="flex justify-center bg-background-secondary min-h-screen">
      {loading ? (
        <Skeleton height="125px" width="100%" borderRadius="xl" />
      ) : (
        <Box
          maxHeight="80vh"
          width="90%"
          maxWidth="auto"
          className="flex justify-start"
        >
          <TableContainer
            className="my-8 w-full"
            overflowY="auto"
            maxHeight="80vh"
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
                  <Th>ID</Th>
                  <Th>Nombre</Th>
                  <Th>Apellido</Th>
                  <Th>DNI</Th>
                  <Th>Email</Th>
                  <Th>Fecha de creacion</Th>
                  <Th>Ultimo inicio de sesión</Th>
                </Tr>
              </Thead>
              <Tbody className="text-gray-800 bg-background-primary-foreground">
                {users.length > 0 ? (
                  users.map((user) => (
                    <Tr key={user.id}>
                      <Td className="p-3 text-left border-y border-gray-800 w-[3rem]">
                        {user.id}
                      </Td>
                      <Td className="p-3 text-center border-y border-gray-800">
                        {user.name}
                      </Td>
                      <Td className="p-3 text-center border-y border-gray-800">
                        {user.lastname}
                      </Td>
                      <Td className="p-3 text-center border-y border-gray-800">
                        {user.dni}
                      </Td>
                      <Td className="p-3 text-center border-y border-gray-800">
                        {user.email}
                      </Td>
                      {/* <Td className="p-3 text-center border-y border-gray-800">
                        {user.creationTime || "N/A"}
                      </Td>
                      <Td className="p-3 text-center border-y border-gray-800">
                        {user.lastSignInTime || "N/A"}
                      </Td> */}
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
    </Box>
  );
};

export default UsersTable;
