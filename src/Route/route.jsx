import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Component/Home/Home";
import ContactUs from "../Component/ContactUs/ContactUs";
import OurTeam from "../Component/OurTeam/OurTeam";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/home',
            element: <Home/>
        },
        {
            path: '/contact-us',
            element: <ContactUs/>
        },
        {
            path: '/our-team',
            element: <OurTeam/>
        },
      ]
    
    },
  ]);


  export default router;