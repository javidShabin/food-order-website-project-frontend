import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import { Home } from "lucide-react";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import AuthUser from "./protectedRoutes/AuthUser";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },

      // Logined user
      {
        path: "user",
        element: <AuthUser />,

      }
    ],
  },
]);
