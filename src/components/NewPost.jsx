import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost() {
    const [currentBody, setCurrentBody]=useState('');
    function bodyChangeHandler(e){
       setCurrentBody(e.target.value);
    }   
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>{currentBody}</p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required />
      </p>
    </form>
  );
}

export default NewPost;