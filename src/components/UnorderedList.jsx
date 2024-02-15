import Post from './Post';
import classes from './UnorderedList.module.css'
import NewPost from './NewPost';
function UnorderedList(){
 return( 
   <>
   <NewPost></NewPost>
    <ul className={classes.posts}>
    <Post author="Jasmine" body="what a loser"></Post>
    <Post author="Rory" body="Did you find the body?"/>
    </ul>
    </>
 )
}

export default UnorderedList;