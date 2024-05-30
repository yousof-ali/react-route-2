import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './component/navbar/Navbar';
import Posts from './component/posts/Posts';





const router = createBrowserRouter([
  {
    path:"/",
    element:<Navbar></Navbar>,
    children:[
      {
        path:'posts',
        loader:()=>fetch("https://jsonplaceholder.typicode.com/posts"),
        element:<Posts></Posts>

      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
