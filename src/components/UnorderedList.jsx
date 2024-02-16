import { useState, useEffect } from 'react';
import Post from './Post';
import classes from './UnorderedList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';


function UnorderedList({willPost, onStopPosting}){
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
  

   let modalContent;
   if(willPost){
      modalContent= <Modal onClose={onStopPosting}>
      <NewPost onCancel={onStopPosting} addPost={addPostHandler}></NewPost>
      </Modal>
   }

 return( 
   <>
   {modalContent}
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