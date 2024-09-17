import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../lib/firebaseConfig"; // Asegúrate de que este es el archivo donde configuras tu Firebase Auth
import { ILoginData, IRegisterData, loginUser, registerUser } from "@/lib/auth";

const AuthContext = createContext<{
    user: User | null, 
    loading: boolean,
    register: (formData: IRegisterData) => Promise<void>,
    login: (formData: ILoginData) => Promise<void> 
}>({
    loading: true,
    user: null,
    register: async () => {},
    login: async () => {},
});

export const useAuth = () => useContext(AuthContext);

type Props = {
    children: ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    // Limpieza del listener al desmontar el componente
    return () => unsubscribe();
  }, []);

  const register = (formData: IRegisterData)=> registerUser(formData, auth)
  const login = (formData: ILoginData)=> loginUser(formData, auth)

  return (
    <AuthContext.Provider value={{ user, loading, register, login }}>
    {!loading && children}
  </AuthContext.Provider>
  );
};
