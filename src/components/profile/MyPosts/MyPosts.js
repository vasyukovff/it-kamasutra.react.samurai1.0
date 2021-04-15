import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

    const btnAddPost = () => {
        props.onAddPost();
    };


    const textareaOnChange = (e) =>
    {
        props.onTextareaOnChange(e.target.value);
    }

    return (
        <div className={classes.postBlock}>
            <h3>My posts + {props.textNewPost}</h3>
            <div>
                <div>
                    <textarea onChange={textareaOnChange} value={props.textNewPost}/>
                </div>
                <div>
                    <button onClick={btnAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {
                     props.posts.map(post => { return <Post {...post} key={post.id}/> })
                }
            </div>
        </div>
    );
}

export default MyPosts;