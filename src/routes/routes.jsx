import { createBrowserRouter } from "react-router-dom";
import App, { MainLayout } from "../App";
import Home from "../pages/Home/Home";
import Services from "../pages/Serviecs/Services";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Orders from "../pages/Orders/Orders";
import Appointment from "../pages/Appointment/Appointment";
import Error from "../pages/Error/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "signin",
            element: <SignIn />,
          },
          {
            path: "signup",
            element: <SignUp />,
          },
          {
            path: "appointment",
            element: <Appointment />,
          },
        ],
      },
    ],
  },
  {
    path: "orders",
    element: <Orders />,
  },
]);

export default routes;
