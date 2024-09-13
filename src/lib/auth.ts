import { auth, db } from "@/lib/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { firebaseErrorHandler, generalErrorHandler } from "@/lib/handleError";

export interface IRegisterData {
  name: string;
  lastname: string;
  dni: string;
  birthday: string;
  email: string;
  password: string;
}

export const validateUser = (data: IRegisterData) => {
    // Validar campos obligatorios
    if (!data.name ||!data.lastname ||!data.dni ||!data.birthday ||!data.email ||!data.password) {
        throw new Error("Todos los campos son obligatorios");
    }

}

export const registerUser = async (formData: IRegisterData) => {
  try {

    validateUser(formData)
    
    // Crear usuario en Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    );
    const user = userCredential.user;

    // Guardar información adicional en Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: formData.name,
      lastname: formData.lastname,
      birthday: formData.birthday,
      dni: formData.dni,
      email: formData.email,
    });
  } catch (error: unknown) {
    let errorMsg = "Hubo un error";

    if (error instanceof FirebaseError) {
        
      errorMsg = firebaseErrorHandler(error.code);
    } else if (error instanceof Error) {

      errorMsg = generalErrorHandler(error.message)
    } else {
      console.error("Error desconocido:", error);
    }

    throw new Error(errorMsg);
  }
};
