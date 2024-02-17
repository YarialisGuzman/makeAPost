import Post from './Post';
import classes from './UnorderedList.module.css'
import { useLoaderData } from 'react-router-dom';

function UnorderedList(){
   const posts=useLoaderData();
   
  


 return( 
   <>
   {posts.length>0 && (
    <ul className={classes.posts}>
   {posts.map((post)=> <Post id={post.id}  key={post.id}body={post.body} author={post.author} />)}
    </ul>

)}
{posts.length===0 && ( 
   <div style={{ textAlign: 'center', color:'white'}}>
   <h2>NO POSTS CURRENTLY</h2>
   <p>Shouldn't you add something?</p>
   </div>
   
)}

    </>
 )
}

export default UnorderedList;