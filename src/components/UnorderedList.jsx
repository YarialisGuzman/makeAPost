import Post from './Post';
import classes from './UnorderedList.module.css'
import NewPost from './NewPost';
import { useState } from 'react';

function UnorderedList(){
   const [currentBody, setCurrentBody]=useState('');
   const [currentAuthor, setCurrentAuthor]=useState('');

   function bodyChangeHandler(e){
      setCurrentBody(e.target.value);
   }

   function authorChangeHandler(e){
      setCurrentAuthor(e.target.value);
   }

 return( 
   <>
   <NewPost bodyUpdates={bodyChangeHandler} authorUpdates={authorChangeHandler}></NewPost>
    <ul className={classes.posts}>
    <Post author={currentAuthor} body={currentBody}></Post>
    <Post author="Rory" body="Did you find the body?"/>
    </ul>
    </>
 )
}

export default UnorderedList;