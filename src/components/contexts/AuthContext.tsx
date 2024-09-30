import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "../../lib/firebaseConfig"; // Asegúrate de que este es el archivo donde configuras tu Firebase Auth
import { ILoginData, IRegisterData, loginUser, registerUser } from "@/lib/auth";

const AuthContext = createContext<{
    user: User | null, 
    loading: boolean,
    register: (formData: IRegisterData) => Promise<void>,
    login: (formData: ILoginData) => Promise<void>,
    logout: (callback: ()=> void) => Promise<void>,
    isAuth: () => boolean;
}>({
    loading: true,
    user: null,
    register: async () => {},
    login: async () => {},
    logout: async () => {},
    isAuth: () => false,

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

  const isAuth = () => {
    return Boolean(user);
  }
  const register = (formData: IRegisterData)=> registerUser(formData, auth)
  const login = (formData: ILoginData)=> loginUser(formData, auth)
  const logout = async (callback?: ()=> void) => {
    await signOut(auth);
    callback && callback();
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, isAuth, logout }}>
    {!loading && children}
  </AuthContext.Provider>
  );
};
