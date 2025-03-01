import { useState, ReactNode } from "react";
import { AuthContext } from "../context/AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}
interface AuthContextType {
  user: string | null;  // Allowing user to be either a string or null
  setUser: (user: string | null) => void;
  signOut: () => void;
  signIn: (user: string, cb: () => void) => void;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  
  const [user, setUser] = useState<string | null>(() => {
    return localStorage.getItem('user')
  });

  const signIn = (newUser: string, cb: () => void) => {
    setUser(newUser);
    cb();
  };

  const signOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const value: AuthContextType = { user, setUser, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
