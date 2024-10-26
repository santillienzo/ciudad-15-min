import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export const initialCategoriesVisited = {
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
      bienestar_social: false,
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
export const markLocation = async ({userId, cat, subCat}: {
    userId: string, 
    cat:string,
    subCat: string
}) => {
    try {
        
        // Referencia al documento a actualizar
        const docRef = doc(db, "users", userId);
    
        // Obtén el documento actual
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
            const userData = docSnap.data();
    
            // Verifica si locationVisited ya está definido
            const locationVisited = userData.locationVisited || initialCategoriesVisited;
    
            const updatedCategory = {
                ...locationVisited[cat],
                [subCat]: true
            };
    
            // Actualiza el documento en Firestore
            await updateDoc(docRef, {
                [`locationVisited.${cat}`]: updatedCategory
            });
        }
    } catch (error) {
        const errorMsg = "Hubo un error al actualizar el documento"
        console.log(error)
        
        throw new Error(errorMsg);
    }
  };