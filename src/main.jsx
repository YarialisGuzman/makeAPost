import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NewPost from './components/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'

const router= createBrowserRouter([
  {path:'/', element:<RootLayout/>, children:[
    {path:'/', element:<App/>},
    {path:'/creat-post', element:<NewPost/>}
  ]}


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
