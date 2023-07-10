import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Study from "./pages/Study/Study";
import User from "./pages/User/User";
import Login from "./pages/Login/Login";
import Message from "./pages/Message/Message";
import MyPage from "./pages/MyPage/MyPage";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import NewProject from "./pages/NewProject/NewProject";
import StudyDetail from "./pages/StudyDetail/StudyDetail";
import NewStudy from "./pages/NewStudy/NewStudy";
import UserDetail from "./pages/UserDetail/UserDetail";
import SignUp from "./pages/SignUp/SignUp";
import LoginRedirect from "./pages/LoginRedirect/LoginRedirect";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "/projects", element: <Project /> },
      { path: "/projects/:projectId", element: <ProjectDetail /> },
      { path: "/projects/new-project", element: <NewProject /> },
      { path: "/studies", element: <Study /> },
      { path: "/studies/:studyId", element: <StudyDetail /> },
      { path: "/studies/new-study", element: <NewStudy /> },
      { path: "/users", element: <User /> },
      { path: "/users/:userId", element: <UserDetail /> },
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/message", element: <Message /> },
      { path: "/my-page", element: <MyPage /> },
      { path: "/oauth2/callback/:provider", element: <LoginRedirect /> },
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
