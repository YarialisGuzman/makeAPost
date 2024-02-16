import { useState } from 'react';
import Post from './Post';
import classes from './UnorderedList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';


function UnorderedList({willPost, onStopPosting}){
   const [prevPosts, setNewPost]=useState([]);
   function addPostEventListener(postData){
      setNewPost((previousPosts)=>{
         [postData, ...previousPosts]
      })

      console.log(postData)
   }
  

   let modalContent;
   if(willPost){
      modalContent= <Modal onClose={onStopPosting}>
      <NewPost onCancel={onStopPosting} addPost={addPostEventListener}></NewPost>
      </Modal>
   }

 return( 
   <>
   {modalContent}
    <ul className={classes.posts}>
    <Post author="Rory" body="Did you find the body?"/>
    </ul>
    </>
 )
}

export default UnorderedList;