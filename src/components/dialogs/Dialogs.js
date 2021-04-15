import classes from './Dialogs.module.css';
import React from 'react';
import DialogItem from './dialogItem/DialogItem';
import MessageItem from './messageItem/MessageItem';

const Dialogs = (props) => {

    const btnAddMessage = () => {
        props.onAddMessage();
    }

    const textareaOnChange = (e) => {
        props.onTextareaOnChange(e.target.value);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {
                    props.dialogs.map(dialog => { return <DialogItem {...dialog} key={dialog.id}/> })
                }
            </div>
            <div className={classes.messages}>
                {
                    props.messages.map(message => { return <MessageItem {...message} key={message.id}/> })
                }
                <div>
                    <div>
                        <textarea onChange={textareaOnChange} value={props.textNewMessage}/>
                    </div>
                    <div>
                        <button onClick={btnAddMessage}>Add new message</button>
                        <span>{props.textNewMessage}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;