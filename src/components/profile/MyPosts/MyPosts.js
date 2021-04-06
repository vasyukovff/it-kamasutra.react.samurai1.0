import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { GetPosts } from './../../../utils/index';
import React from 'react';

const MyPosts = (props) => {
    // let postsData = GetPosts();

    let contentNewPost = React.createRef();

    const btnAddPost = () => {
        props.callbackAddPost();
        // contentNewPost.current.value = '';
    };


    const textareaOnChange = () =>
    {
        props.callbackChangeTextNewPost(contentNewPost.current.value);
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts + {props.textNewPost}</h3>
            <div>
                <div>
                    <textarea ref={contentNewPost} onChange={textareaOnChange} value={props.textNewPost}/>
                </div>
                <div>
                    <button onClick={btnAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {
                     props.posts.map(post => { return <Post {...post} /> })
                }
            </div>
        </div>
    );
}

export default MyPosts;