import classes from './MessageItem.module.css';
import { React } from 'react';

const MessageItem = (props) => {
    return (
        <div className={classes.message} key={props.id}>
            {props.message}
        </div>
    );
}

export default MessageItem;