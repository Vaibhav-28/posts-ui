import { createHashRouter, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Posts from "./pages/Posts";

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="sign-in" />,
  },
  {
    path: "sign-in",
    element: <SignIn />,
  },
  {
    path: "posts",
    element: <Posts />,
  },
]);

export default router;
