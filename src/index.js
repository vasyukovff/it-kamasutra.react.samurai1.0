import reportWebVitals from './reportWebVitals';
import {state, addPost, changeTextNewPost, addMessage, changeTextNewMessage, subscribe} from './redux/statie'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const render = () => {
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

render();

subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();