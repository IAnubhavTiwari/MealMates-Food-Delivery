


import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import MainLayout from './MainLayout';
import Login from './auth/Login';
import Signup from './auth/Signup';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import VerifyEmail from './auth/VerifyEmail';
// import Navbar from './components/ui/Navbar';
import HereSection from "./components/ui/HereSection";
import MainLayout from "./layout/MainLayout";
import Profile from "./components/ui/Profile";
import SearchPage from "./components/ui/SearchPage";
import RestaurantDetail from "./components/ui/RestaurantDetail";
import Cart from "./components/ui/Cart";
import Restaurant from "./admin/Restaurant";
import AddMenu from "./admin/AddMenu";
import Orders from "./admin/Orders";
import Success from "./components/ui/Success";



const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children:[
      {
        path:"/",
        element:<HereSection/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/search/:text",
        element:<SearchPage />
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantDetail />
      },
      {
        path:"/cart",
        element:<Cart />
      },
      {
        path:"/order/status",
        element:<Success />
      },

      //admin
      {
        path:"/admin/restaurant",
        element:<Restaurant />
      },
      {
        path:"/admin/menu",
        element:<AddMenu />
      },
      {
        path:"/admin/orders",
        element:<Orders/>
      },
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/forgot-password",
    element:<ForgotPassword/>
  },
  {
    path:"/reset-password",
    element:<ResetPassword/>
  },
  {
    path:"/verify-email",
    element:<VerifyEmail/>
  },
])

function App() {
  

  return (
  
    <RouterProvider router={appRouter}>
    

    </RouterProvider>
     

  )
}

export default App
