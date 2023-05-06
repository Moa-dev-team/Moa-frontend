import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthContextProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <NavBar />
        <section className="outlet">
          <Outlet />
        </section>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
