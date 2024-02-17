import { useState, useEffect } from 'react';
import Post from './Post';
import classes from './UnorderedList.module.css'


function UnorderedList(){
   const [prevPosts, setNewPost]=useState([]);
   const [isFetching, setIsFetching]=useState(false);
   
   useEffect(()=>{
      async function fetchPosts(){
         setIsFetching(true);
         const response= await fetch('http://localhost:8080/posts')
         const resData= await response.json();
         setNewPost(resData.posts);
         setIsFetching(false);
      }
      fetchPosts();
   }, [])
   
   function addPostHandler(postData){
      fetch('http://localhost:8080/posts', {
         method: 'POST',
         body: JSON.stringify(postData),
         headers:{
            'Content-Type':'application/json'
         }
      })
      setNewPost((previousPosts)=> [postData, ...previousPosts]
      )
   }
  


 return( 
   <>
   {!isFetching && prevPosts.length>0 && (
    <ul className={classes.posts}>
   {prevPosts.map((post)=> <Post  key={post.body}body={post.body} author={post.author} />)}
    </ul>

)}
{!isFetching && prevPosts.length===0 && ( 
   <div style={{ textAlign: 'center', color:'white'}}>
   <h2>NO POSTS CURRENTLY</h2>
   <p>Shouldn't you add something?</p>
   </div>

   
)}
{isFetching && (
   <div style={{textAlign:'center', color: 'white'}}>
      <p>Loading posts...</p>
   </div>
)}
    </>
 )
}

export default UnorderedList;