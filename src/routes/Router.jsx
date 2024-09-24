import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import AuthUser from "./protectedRoutes/AuthUser";
import ProfilePage from "../pages/user/UserProfile";
import Home from "../pages/Home";
import ResDetails from "../pages/user/ResDetails";
import CartPage from "../pages/user/CartPage";
import Restaurant from "../pages/Restaurant";
import About from "../pages/About";

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
        path: "about",
        element: <About/>
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "restaurant",
        element: <Restaurant/>
      },

      // Logined user
      {
        path: "user",
        element: <AuthUser />,

        children: [
          {
            path: "profile",
            element: <ProfilePage />,
          },
          {
            path: "res-details/:id",
            element: <ResDetails />,
          },
          {
            path: "cart",
            element: <CartPage/>
          }
        ],
      },
    ],
  },
]);
