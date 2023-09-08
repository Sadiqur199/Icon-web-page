import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import IconList from './Component/pages/IconList/IconList';
import IconFilter from './Component/IconFilter';

const router = createBrowserRouter([
  {
    path: "/",
    element:<IconList></IconList>,
    children:[
      {
        path:'/icons',
        element:<IconFilter></IconFilter>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);