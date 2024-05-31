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
import PostBetail from './component/postDetail/PostBetail';
import TodoDetails from './component/todoDetails/TodoDetails';
import UserDetails from './component/userDetails/UserDetails';
import Error from './component/error/Error';





const router = createBrowserRouter([
  {
    path:"/",
    element:<Navbar></Navbar>,
    errorElement:<Error></Error>,
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
      },
      {
        path:'post/:id',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element:<PostBetail></PostBetail>
      },
      {
        path:'todo/:id',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`),
        element:<TodoDetails></TodoDetails>
      },
      {
        path:'user/:id',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
        element:<UserDetails></UserDetails>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
