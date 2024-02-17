import classes from './Post.module.css';
import { Link } from 'react-router-dom';


function Post({id,author,body}){
    return(
        <li className={classes.post}>
            <Link to={id}>
            <p className={classes.text}>Comment:{body}</p>
            <p className={classes.author}>By {author}</p>
            </Link>
        </li>
    )
}

export default Post;