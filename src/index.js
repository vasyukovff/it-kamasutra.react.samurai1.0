import reportWebVitals from './reportWebVitals';
// import {state, addPost, changeTextNewPost, addMessage, changeTextNewMessage, subscribe} from './redux/statie'
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StoreContext from './StoreContext';

export const render = () => {
    ReactDOM.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

render();

store.subscribe(render);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();