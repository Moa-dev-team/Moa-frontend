import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import TestGang from "./TestGang";
import TestSung from "./TestSung";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Study from "./pages/Study/Study";
import User from "./pages/User/User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TestGang />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/projects", element: <Project /> },
      { path: "/studies", element: <Study /> },
      { path: "/users", element: <User /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* <App /> */}
      <TestGang />
      <TestSung />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
