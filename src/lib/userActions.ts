import { doc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { CategoriesVisited, UserData } from "./types/user.types";

export const initialCategoriesVisited:CategoriesVisited = {
    comercio: {
      carniceria: false,
      panaderia: false,
      farmacia: false,
      verduleria: false,
      almacen: false,
      supermercado: false,
      cajero_automatico: false
    },
    equipamiento_basico: {
      cultura: false,
      educacion: false,
      deporte: false,
      salud: false
    },
    espacios_verdes: {
      espacios_verdes: false
    },
    movilidad: {
      metrotranvia: false,
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