import React from 'react';
import ReactDOM from 'react-dom';
import './../index.css';
import App from './../App';

export let render = (state, addPost) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} callbackAddPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}