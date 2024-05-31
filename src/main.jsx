import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './component/navbar/Navbar';
import Posts from './component/posts/Posts';
import Albums from './component/albums/Albums';





const router = createBrowserRouter([
  {
    path:"/",
    element:<Navbar></Navbar>,
    children:[
      {
        path:'posts',
        loader:()=>fetch("https://jsonplaceholder.typicode.com/posts"),
        element:<Posts></Posts>

      },
      {
        path:'albums',
        loader:()=>fetch("https://jsonplaceholder.typicode.com/albums"),
        element:<Albums></Albums>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
