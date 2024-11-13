import { db } from "@/lib/firebaseConfig";
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
          const userData = doc.data();

          // if (showCompletedUsers) {
          //   // Check if the user has visited all categories
          //   if (hasVisitedAllCategories(userData.locationVisited)) {
          filteredUsers.push({ id: doc.id, ...userData } as UserData);
          //   }
          // } else {
          //   filteredUsers.push({ id: doc.id, ...userData } as UserData);
          // }
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
    <Box className="flex items-center justify-center bg-background-secondary min-h-screen">
      {loading ? (
        <Skeleton height="125px" width="100%" borderRadius="xl" />
      ) : (
        <Box
          // borderWidth="1px"
          // rounded="md"
          // overflow="hidden"
          maxHeight="80vh"
          width="90%"
          maxWidth="auto"
          className="flex items-center justify-center"
        >
          <TableContainer
            className="max-xl:overflow-x-auto max-sm:overflow-x-auto"
            overflowY="auto"
            maxHeight="80vh"
          >
            <Table
              size="sm"
              variant="striped"
              colorScheme="red"
              className="w-full"
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
                </Tr>
              </Thead>
              <Tbody className="text-gray-800">
                {users.length > 0 ? (
                  users.map((user) => (
                    <Tr>
                      <Td key={user.id} className="p-3 px-0 text-left border-y border-gray-800">
                        {user.id}
                      </Td>

                      <Td className="p-3 text-center border-y border-gray-800">{user.name}</Td>

                      <Td className="p-3 text-center border-y border-gray-800">{user.lastname}</Td>

                      <Td className="p-3 text-center border-y border-gray-800">{user.dni}</Td>

                      <Td className="p-3 text-center border-y border-gray-800">{user.email}</Td>
                    </Tr>
                  ))
                ) : (
                  <Tr>
                    <Td colSpan={5} textAlign="center" className="text-red-800">
                      Oops! No se encontraron usuarios. Parece que no tiene
                      usuarios registrados u ocurrió un error inesperado.
                    </Td>
                  </Tr>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>

    // <>
    //   <div className="flex flex-col gap-4">
    //     {loading ? (
    //       <div className="space-y-3">
    //         <Skeleton className="h-[125px] w-full rounded-xl bg-background-secondary-muted" />
    //       </div>
    //     ) : users.length > 0 ? (
    //       users.map((user) => (
    //         <div
    //           key={user.id}
    //           className="bg-background-secondary-muted rounded-xl shadow-md p-6 flex flex-col gap-2"
    //         >
    //           <div className="flex items-center gap-2">
    //             <div>
    //               <p className="text-gray-100">{user.id}</p>
    //               <h3 className="text-xl font-semibold text-white">
    //                 {user.name} {user.lastname}
    //               </h3>
    //               <p className="text-gray-100">{user.dni}</p>
    //               <p className="text-gray-100">{user.email}</p>

    //             </div>
    //           </div>
    //         </div>
    //       ))
    //     ) : (
    //       <div className="text-gray-100 text-center p-4">No users found.</div>
    //     )}
    //   </div>
    // </>
  );
};

export default UsersTable;
