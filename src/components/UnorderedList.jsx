import { useState } from 'react';

import Post from './Post';
import classes from './UnorderedList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';


function UnorderedList(){
   const [currentBody, setCurrentBody]=useState('');
   const [currentAuthor, setCurrentAuthor]=useState('');
   const [modalIsVisible, setModalToInvisible]=useState(true);


   function bodyChangeHandler(e){
      setCurrentBody(e.target.value);
   }

   function authorChangeHandler(e){
      setCurrentAuthor(e.target.value);
   }

   function modalVisibilityHandler(){
      setModalToInvisible(false);
   }

   let modalContent;
   if(modalIsVisible){
      modalContent= <Modal onClose={modalVisibilityHandler}>
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