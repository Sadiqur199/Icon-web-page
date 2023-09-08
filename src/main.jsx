import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './Component/Login/Login';
import SignUp from './Component/SingUp/SingUp';
import Main from './Layout/Main';
import IconFilter from './Component/IconFilter';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<IconFilter></IconFilter>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/singup',
        element:<SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);