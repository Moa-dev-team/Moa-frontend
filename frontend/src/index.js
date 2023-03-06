import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Study from "./pages/Study/Study";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import Message from "./pages/Message/Message";
import MyPage from "./pages/MyPage/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/projects", element: <Project /> },
      { path: "/studies", element: <Study /> },
      { path: "/users", element: <User /> },
      { path: "/login", element: <Login /> },
      { path: "/message", element: <Message /> },
      { path: "/my-page", element: <MyPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
