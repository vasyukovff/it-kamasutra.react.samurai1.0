import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';
import {addPost, changeTextNewPost, addMessage, changeTextNewMessage} from './statie';

export let render = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} callbackAddPost={addPost} 
                            callbackChangeTextNewPost={changeTextNewPost} 
                            callbackAddMessage={addMessage}
                            callbackChangeTextNewMessage={changeTextNewMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}