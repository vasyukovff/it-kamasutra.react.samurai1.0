import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { GetPosts } from './../../../utils/index';
import React from 'react';

const MyPosts = () => {

    let postsData = GetPosts();
    
    let contentNewPost = React.createRef();

    const btnAddPost = () => {
        alert(contentNewPost.current.value);
    };

    return (
        <div className={classes.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={contentNewPost}></textarea>
                </div>
                <div>
                    <button onClick={btnAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {
                     postsData.map(post => { return <Post {...post} /> })
                }
            </div>
        </div>
    );
}

export default MyPosts;