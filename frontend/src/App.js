import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <section className="outlet">
        <Outlet />
      </section>
    </React.Fragment>
  );
}

export default App;
