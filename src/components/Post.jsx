import classes from './Post.module.css';
function Post(props){
    return(
        <div className={classes.post}>
            <p className={classes.text}>Comment:{props.body}</p>
            <p className={classes.author}>By {props.author}</p>
            
        </div>
    )
}

export default Post;