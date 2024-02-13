import classes from './Post.module.css';

function Post(props){
    return(
        <li className={classes.post}>
            <p className={classes.text}>Comment:{props.body}</p>
            <p className={classes.author}>By {props.author}</p>
            
        </li>
    )
}

export default Post;