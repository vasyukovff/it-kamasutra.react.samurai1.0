import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='epta message' likesCount='20'/>
                <Post message='Hello world!' likesCount='0'/>
                <Post message='ILearn REACT' likesCount='66'/>
            </div>
        </div>
    );
}

export default MyPosts;