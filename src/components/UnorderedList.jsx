import { useState } from 'react';

import Post from './Post';
import classes from './UnorderedList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';


function UnorderedList({willPost, onStopPosting}){
   const [currentBody, setCurrentBody]=useState('');
   const [currentAuthor, setCurrentAuthor]=useState('');
  


   function bodyChangeHandler(e){
      setCurrentBody(e.target.value);
   }

   function authorChangeHandler(e){
      setCurrentAuthor(e.target.value);
   }

 

   let modalContent;
   if(willPost){
      modalContent= <Modal onClose={onStopPosting}>
      <NewPost onBodyUpdates={bodyChangeHandler} onAuthorUpdates={authorChangeHandler}></NewPost>
      </Modal>
   }

 return( 
   <>
   {modalContent}
    <ul className={classes.posts}>
    <Post author={currentAuthor} body={currentBody}></Post>
    <Post author="Rory" body="Did you find the body?"/>
    </ul>
    </>
 )
}

export default UnorderedList;