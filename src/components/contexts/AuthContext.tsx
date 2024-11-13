import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, sendPasswordResetEmail, signOut, User } from "firebase/auth";
import { auth, db } from "../../lib/firebaseConfig"; // Asegúrate de que este es el archivo donde configuras tu Firebase Auth
import { ILoginData, IRegisterData, loginUser, registerUser } from "@/lib/auth";
import { doc, getDoc } from "firebase/firestore";
import { UserData } from "@/lib/types/user.types";
import { initialCategoriesVisited } from "@/lib/userActions";

const AuthContext = createContext<{
    user: User | null,
    userData: UserData | null,
    loading: boolean,
    register: (formData: IRegisterData) => Promise<void>,
    login: (formData: ILoginData) => Promise<void>,
    logout: (callback: ()=> void) => Promise<void>,
    updateUserData: (userData: UserData) => void,
    isAuth: () => boolean,
    recoverPassword: (email: string) => Promise<void>,
}>({
    loading: true,
    user: null,
    userData: null,
    register: async () => {},
    login: async () => {},
    logout: async () => {},
    updateUserData: async () => {},
    isAuth: () => false,
    recoverPassword: async () => {},
});

export const useAuth = () => useContext(AuthContext);

type Props = {
    children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        // Si el usuario está autenticado, obtén los datos adicionales desde Firestore
        const userDocRef = doc(db, "users", user.uid); // Asegúrate de que 'usuarios' es tu colección
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const data = userDoc.data() as UserData;
          const locationVisited = data.locationVisited || initialCategoriesVisited;

          // Reorganiza el objeto locationVisited en el orden deseado
          const orderedLocationVisited = {
            comercio: locationVisited.comercio || initialCategoriesVisited.comercio,
            equipamiento_basico: locationVisited.equipamiento_basico || initialCategoriesVisited.equipamiento_basico,
            espacios_verdes: locationVisited.espacios_verdes || initialCategoriesVisited.espacios_verdes,
            movilidad: locationVisited.movilidad || initialCategoriesVisited.movilidad,
          };

        setUserData({
          ...data,
          locationVisited: orderedLocationVisited
        });
        }
      } else {
        setUserData(null); // Si no hay usuario, resetea UserData
      }
      setLoading(false);
    });

    // Limpieza del listener al desmontar el componente
    return () => unsubscribe();
  }, []);

  const isAuth = () => {
    return Boolean(user);
  }
  const register = (formData: IRegisterData)=> registerUser(formData, auth)
  const login = (formData: ILoginData)=> loginUser(formData, auth)
  const logout = async (callback?: ()=> void) => {
    await signOut(auth);
    setUserData(null);
    callback!();
  };

  const updateUserData = (newUserData: UserData) => {
    setUserData(newUserData)
  }

  const recoverPassword = async (email: string) => sendPasswordResetEmail(auth, email, {
    url: window.location.origin + "/iniciar-sesion"
  })

  return (
    <AuthContext.Provider value={{ user, userData, loading, register, login, isAuth, logout, recoverPassword, updateUserData }}>
    {!loading && children}
  </AuthContext.Provider>
  );
};
