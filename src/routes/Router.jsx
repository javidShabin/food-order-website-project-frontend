import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import AuthUser from "./protectedRoutes/AuthUser";
import ProfilePage from "../pages/user/UserProfile";
import Home from "../pages/Home";
import ResDetails from "../pages/user/ResDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,

    children: [
      {
        path: "/",
        element: <Home/>,
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

        children: [
            {
                path: "profile",
                element: <ProfilePage/>
            },
            {
                path: "res-details",
                element: <ResDetails/>
            }
        ]
      }
    ],
  },
]);
