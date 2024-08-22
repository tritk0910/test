import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../../App";
import LoginForm from "../layout/auth/LoginForm";
import RegisterForm from "../layout/auth/RegisterForm";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      
      { path: "/login", element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
      { path: "*", element: <Navigate replace to={"/"} /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
