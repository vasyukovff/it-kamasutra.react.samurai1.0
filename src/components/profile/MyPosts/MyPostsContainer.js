import React from 'react';
import { CreateActionAddPost, CreateActionChangeTextNewPost } from './../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        textNewPost: state.profilePage.textNewPost,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        onAddPost: () => {
            dispatch(CreateActionAddPost());
        },
        onTextareaOnChange: (text) => {
            dispatch(CreateActionChangeTextNewPost(text));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;