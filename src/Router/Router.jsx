import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Rooms from "./Rooms";

import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
// import BookingCheck from "../Component/BookingCheck";
import RoomDetail from "../Pages/RoomDetail/RoomDetail";
import RoomOrder from "./RoomOrder";
import MyBooking from "../Pages/MyBooking/MyBooking";
import PrivateRoute from "../Component/PrivateRoute/PrivateRoute";
import Update from "./Update";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>
      },
      {
        path: "/mybooking",
        element:
         <PrivateRoute>
           <MyBooking></MyBooking>
         </PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/room/:_id",
        element: <RoomDetail></RoomDetail>
      },
      {
        path: "/roomorder/:id",
        element: <PrivateRoute>
          <RoomOrder></RoomOrder>
        </PrivateRoute>
      },
      {
        path: "/update/:id",
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>
      }
    ]
  },
]);
export default router;