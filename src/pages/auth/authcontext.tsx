import {createContext, useContext, useState} from 'react';
import type { ReactNode } from 'react';


type AuthContextType = {
  user: string | null;
  login: (params: {user: string}) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

type AuthProvideProps = {
  children: ReactNode;
}

export const AuthProvider = ({children}: AuthProvideProps) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (params: {user: string}) => {
    setUser(params.user);
    localStorage.setItem('user', params.user);
  }


  const logout = () =>{
    setUser(null);
    localStorage.removeItem('user');
  }

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
