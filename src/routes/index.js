import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import Home from "../pages/home";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import Cart from "../pages/cart";

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
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
]);

export default routes;
