import { createContext } from "react";

interface AuthContextType {
  user: string | null;  // Allowing user to be either a string or null
  setUser: (user: string | null) => void;
  signOut: () => void;
  signIn: (user: string, cb: () => void) => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);


