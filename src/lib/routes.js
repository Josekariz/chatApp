import { Login } from "components/auth/login";
import { Register } from "components/auth/register";
import { createBrowserRouter } from "react-router-dom";
export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const router = createBrowserRouter([
  { path: ROOT, element: "Public Root" },
  { path: LOGIN, element: <Login/> },
  { path: REGISTER, element: <Register/> },
]);