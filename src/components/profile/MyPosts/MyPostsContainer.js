import React from 'react';
import { CreateActionAddPost, CreateActionChangeTextNewPost } from './../../../redux/profile-reducer'
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {

    let stateProfile = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(CreateActionAddPost());
    };


    const textareaOnChange = (text) => {
        props.store.dispatch(CreateActionChangeTextNewPost(text));
    };

    return (<MyPosts onAddPost={addPost}
        onTextareaOnChange={textareaOnChange}
        textNewPost={stateProfile.textNewPost}
        posts={stateProfile.posts} />);
}

export default MyPostsContainer;