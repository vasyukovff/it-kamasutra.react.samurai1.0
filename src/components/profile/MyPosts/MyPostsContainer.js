import React from 'react';
import { onAddPost, onTextareaOnChange } from './../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        textNewPost: state.profilePage.textNewPost,
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect(mapStateToProps, {onAddPost, onTextareaOnChange})(MyPosts);

export default MyPostsContainer;