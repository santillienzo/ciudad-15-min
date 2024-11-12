import RankingDialog from "@/components/features/game/ranking/RankingDialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/lib/firebaseConfig";
import { UserData } from "@/lib/types/user.types";
import { hasVisitedAllCategories } from "@/lib/userActions";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const Ranking = () => {
    const [showCompletedUsers, setShowCompletedUsers] = useState(true);
    const [users, setUsers] = useState<UserData[]>([]);
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const fetchUsersWithAllCategoriesVisited = async () => {
          try {
            const usersRef = collection(db, 'users');
            const usersSnapshot = await getDocs(usersRef);
            const filteredUsers:UserData[] = [];
    
            usersSnapshot.forEach((doc) => {
              const userData = doc.data();

              if (showCompletedUsers) {
                // Check if the user has visited all categories
                if (hasVisitedAllCategories(userData.locationVisited)) {
                    filteredUsers.push({ id: doc.id, ...userData } as UserData);
                }
              } else {
                filteredUsers.push({ id: doc.id, ...userData } as UserData);
              }
            });
    
            setUsers(filteredUsers);
          } catch (error) {
            console.error("Error fetching users:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchUsersWithAllCategoriesVisited();
      }, [showCompletedUsers]);

    const closeRankingDialog = () => {
        setIsOpenDialog(false);
    }

    const openRankingDialog = () => {
        setIsOpenDialog(true);
    }

    const handleShowCompletedUsers = (value: string) => {
        setShowCompletedUsers(value === "completedUsers");
    }
    

    return (
        <section className="p-4 bg-background-secondary min-h-screen">
            <h1 className="text-2xl font-bold mb-4 text-white">Ranking</h1>
            <div className="flex items-center gap-2 mb-4">
                <RadioGroup defaultValue="allUsers" onValueChange={handleShowCompletedUsers}>
                    <div className="flex items-center space-x-2 text-white">
                        <RadioGroupItem value="allUsers" id="r2" className="text-white"/>
                        <Label htmlFor="r2">Todos los usuarios</Label>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        <RadioGroupItem value="completedUsers" id="r3" className="text-white"/>
                        <Label htmlFor="r3">Usuarios con desafío completado</Label>
                    </div>
                </RadioGroup>
            </div>
            <div className="flex flex-col gap-4">
                {loading ? (
                    <div className="space-y-3">
                        <Skeleton className="h-[125px] w-full rounded-xl bg-background-secondary-muted" />
                    </div>
                ) : users.length > 0 ? users.map((user) => (
                    <div key={user.id} className="bg-background-secondary-muted rounded-xl shadow-md p-6 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <div>
                                <h3 className="text-xl font-semibold text-white">{user.name} {user.lastname}</h3>
                                <p className="text-gray-100">{user.email}</p>
                                <p className="text-gray-100">{user.dni}</p>
                            </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-100">
                            ¡Ha completado todas las ubicaciones!
                        </div>
                    </div>
                )) : <p className="text-white text-center">No hay usuarios con todas las categorías visitadas</p>}
            </div>
            {users.length > 0 && (
                <button
                    onClick={openRankingDialog}
                    className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors w-11/12"
                >
                    Abrir ruleta de usuarios
                </button>
            )}
            <RankingDialog users={users} open={isOpenDialog} onClose={closeRankingDialog} />
        </section>
    )
}

export default Ranking