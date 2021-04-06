import { render } from './redux/render';
import reportWebVitals from './reportWebVitals';
import {state, addPost} from './redux/statie'

render(state, addPost);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();