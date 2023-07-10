import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./contexts/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const queryClient = new QueryClient();

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <NavBar />
          <section className="outlet">
            <Outlet />
          </section>
        </AuthContextProvider>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
