import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Posts, {loader as loaderForPosts} from './routes/Posts.jsx'
import './index.css'
import NewPost from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'


const router= createBrowserRouter([
  {path:'/', 
  element:<RootLayout/>,
   children:[
    {
      path:'/', 
      element:<Posts/>, 
      loader: loaderForPosts,
      children:[{path:'/create-post', element:<NewPost/>}]},
    
  ]}


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
