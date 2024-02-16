import classes from './NewPost.module.css';
import { useState } from 'react';



function NewPost({onCancel, addPost}) {
  const [currentBody, setCurrentBody]=useState('');
  const [currentAuthor, setCurrentAuthor]=useState('');
 


  function bodyChangeHandler(e){
     setCurrentBody(e.target.value);
  }

  function authorChangeHandler(e){
     setCurrentAuthor(e.target.value);
  }

  function onSubmitHandler(e){
    e.preventDefault();
    const postData={
      body:currentBody,
      author:currentAuthor
    };
    addPost(postData);
    onCancel();
  }

  
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler}/>
      </p>
      <p>
        <label htmlFor="name" >Your name</label>
        <input type="text" id="name" onChange={authorChangeHandler} required />
      </p>
      <p className={classes.actions}>
      <button type="button" onClick={onCancel}>cancel</button>
      <button type="submit">submit</button>
      </p>
    </form>
  );
}

export default NewPost;