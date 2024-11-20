import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { CategoriesVisited, UserData } from "./types/user.types";

export const initialCategoriesVisited:CategoriesVisited = {
    comercio: {
      panaderia: false,
      farmacia: false,
      supermercado: false,
      cajero_automatico: false
    },
    equipamiento_basico: {
      cultura: false,
      educacion: false,
      salud: false
    },
    espacios_verdes: {
      espacios_verdes: false
    },
    movilidad: {
      estaciones_de_bicicleta: false,
      paradas_de_colectivo: false
    }
};

// Actualizar el campo
export const markLocation = async ({userId, userData, cat, subCat}: {
    userId: string,
    userData: UserData,
    cat:string,
    subCat: string
}): Promise<UserData> => {
    try {
        
        // Referencia al documento a actualizar
        const docRef = doc(db, "users", userId);
    
        // Verifica si locationVisited ya está definido
        const locationVisited = userData.locationVisited;

        const updatedCategory = {
            ...locationVisited?.[cat],
            [subCat]: true
        };

        // Actualiza el documento en Firestore
        //MEJORAR: actualizar solo el documento que se actualiza
        await updateDoc(docRef, {
            locationVisited: {
                ...locationVisited,
                [cat]: updatedCategory
            },
            // [`locationVisited.${cat}`]: updatedCategory
        });

        // Actualiza el objeto userData localmente
        const updatedUserData: UserData = {
            ...userData,
            locationVisited: {
                ...locationVisited,
                [cat]: updatedCategory
            }
        };
        // Retorna el objeto userData actualizado
        return updatedUserData;

    } catch (error) {
        const errorMsg = "Hubo un error al actualizar el documento"
        console.log(error)
        
        throw new Error(errorMsg);
    }
};

export const finishGame = async ({userId}: {
    userId: string,
}) => {
    try {
        const docRef = doc(db, "users", userId);
        await updateDoc(docRef, {
            isFinalized: true
        });
    } catch (error) {
        const errorMsg = "Hubo un error al actualizar el documento"
        console.log(error)
        
        throw new Error(errorMsg);
    }
}

export const hasVisitedAllCategories = (categoriesVisited:CategoriesVisited) => {
    if (!categoriesVisited) return false;

    for (const category in categoriesVisited) {
        for (const subCategory in categoriesVisited[category]) {
        if (!categoriesVisited[category][subCategory]) {
            return false;
        }
        }
    }
    return true;
};

export const resetAllUserLocationsVisited = async () => {
    try {
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);

        const users: UserData[] = [];

        await Promise.all(usersSnapshot.docs.map(async (userDoc) => {
            const id = userDoc.id;
            const userData = userDoc.data() as UserData;

            const updatedUser = {
                ...userData,
                locationVisited: initialCategoriesVisited
            }

            // Actualiza el documento en Firestore
            const userRef = doc(db, "users", id);
            await updateDoc(userRef, updatedUser);

            users.push(updatedUser);
        }));

        return users;
    } catch (error) {
        const errorMsg = "Hubo un error al obtener los usuarios"
        console.log(error)
        
        throw new Error(errorMsg);
    }
}

