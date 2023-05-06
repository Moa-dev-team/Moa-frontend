import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isUser, setIsUser] = useState();
  const handleIsUser = () => {
    setIsUser((prev) => !prev);
  };

  useEffect(() => {
    const accessToken = axios.defaults.headers.common["Authorization"];
    setIsUser(accessToken ? accessToken.split(" ")[1] : "");
  }, [isUser]);

  return (
    <AuthContext.Provider value={{ isUser, handleIsUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
