import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Home/Home";
import ContactUs from "../Component/ContactUs/ContactUs";
import OurTeam from "../Component/OurTeam/OurTeam";
import OurPortfolio from "../Component/OurPortfolio/OurPortfolio";
import Login from "../Component/Login/Login";
import Dashboard from "../Component/Dashboard/Dashboard";
import Order from "../Component/Dashboard/Order/Order";
import ServiceList from "../Component/Dashboard/ServiceList/ServiceList";
import Review from "../Component/Dashboard/Review/Review";
import AllServiceList from "../Component/Dashboard/AllServiceList/AllServiceList";
import AddService from "../Component/Dashboard/AddService/AddService";
import MakeAdmin from "../Component/Dashboard/MakeAdmin/MakeAdmin";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/our-team",
        element: <OurTeam />,
      },
      {
        path: "/our-portfolio",
        element: <OurPortfolio />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/order",
        element: <Order />,
      },
      {
        path: "/dashboard/order/:name",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/serviceList",
        element: <ServiceList />,
      },
      {
        path: "/dashboard/review",
        element: <Review />,
      },
      {
        path: "/dashboard/allServicesList",
        element: <AllServiceList />,
      },
      {
        path: "/dashboard/addService",
        element: <AddService />,
      },
      {
        path: "/dashboard/makeAdmin",
        element: <MakeAdmin />,
      },
    ],
  },
]);

export default router;
