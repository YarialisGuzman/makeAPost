import classes from './NewPost.module.css';
import { useState } from 'react';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';



function NewPost({addPost}) {
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
    <Modal>
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
      <Link to=".." type="button">cancel</Link>
      <button type="submit">submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;