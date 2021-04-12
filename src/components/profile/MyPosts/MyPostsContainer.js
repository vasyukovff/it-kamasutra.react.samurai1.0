import React from 'react';
import { CreateActionAddPost, CreateActionChangeTextNewPost } from './../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import StoreContext from './../../../StoreContext';

const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let stateProfile = store.getState().profilePage;

                    const addPost = () => {
                        store.dispatch(CreateActionAddPost());
                    };


                    const textareaOnChange = (text) => {
                        store.dispatch(CreateActionChangeTextNewPost(text));
                    };

                    return <MyPosts onAddPost={addPost}
                        onTextareaOnChange={textareaOnChange}
                        textNewPost={stateProfile.textNewPost}
                        posts={stateProfile.posts} />
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;