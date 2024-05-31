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
import Todos from './component/todos/Todos';
import Users from './component/users/Users';
import AlbumDetail from './component/albumDetail/AlbumDetail';





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
      },
      {
        path:'todos',
        loader:()=>fetch("https://jsonplaceholder.typicode.com/todos"),
        element:<Todos></Todos>
      },
      {
        path:'users',
        loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
        element:<Users></Users>
      },
      {
        path:'album/:id',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/albums/${params.id}`),
        element:<AlbumDetail></AlbumDetail>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
