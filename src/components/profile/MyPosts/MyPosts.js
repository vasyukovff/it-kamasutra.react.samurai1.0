import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'this is post 1', likesCount: 15},
        {id: 2, message: 'this is post 2', likesCount: 16},
        {id: 3, message: 'this is post 3', likesCount: 17},
        {id: 4, message: 'this is post 4', likesCount: 18},
    ];

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post {...postsData[0]}/>
                <Post {...postsData[1]}/>
                <Post {...postsData[2]}/>
                <Post {...postsData[3]}/>
            </div>
        </div>
    );
}

export default MyPosts;