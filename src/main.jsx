import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Posts, {loader as loaderForPosts} from './routes/Posts.jsx'
import './index.css'
import NewPost, {action as newPostAction} from './routes/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import PostSpecifics, {loader as postSpecificsLoader} from './routes/PostSpecifics.jsx'


const router= createBrowserRouter([
  {path:'/', 
  element:<RootLayout/>,
   children:[
    {
      path:'/', 
      element:<Posts/>, 
      loader: loaderForPosts,
      children:[
        {path:'/create-post',action:newPostAction, element:<NewPost/>},
              {path:'/:postId', element:<PostSpecifics/>, loader:postSpecificsLoader}
    ]},
    
  ]}


]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
