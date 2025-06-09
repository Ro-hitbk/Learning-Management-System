import {createContext, useContext, useState} from 'react';
import type { ReactNode } from 'react';


type AuthContextType = {
  user: boolean | null;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProvideProps = {
  children: ReactNode;
}

export const AuthProvider = ({children}: AuthProvideProps) => {
  const [user, setUser] = useState<boolean | null>(null);

  const login = () => setUser(true);
  const logout = () => setUser(null);

  return(
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
