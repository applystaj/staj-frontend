import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import Home from "../pages/home";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

export default routes;
