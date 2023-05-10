import { createContext, useContext, useEffect, useState } from "react";
import { getCookie } from "../util/cookie";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isUser, setIsUser] = useState();
  const handleIsUser = () => {
    setIsUser((prev) => !prev);
  };

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    setIsUser(accessToken || "");
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
