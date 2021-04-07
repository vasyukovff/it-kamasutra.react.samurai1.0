import classes from './Dialogs.module.css';
import React from 'react';
import DialogItem from './dialogItem/DialogItem';
import MessageItem from './messageItem/MessageItem';

const Dialogs = (props) => {
    let textNewMessage = React.createRef();

    const btnAddMessage = () => {
        props.callbackAddMessage();
    }

    const textareaOnChange = () => {
        props.callbackChangeTextNewMessage(textNewMessage.current.value);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {
                    props.dialogs.map(dialog => { return <DialogItem {...dialog} /> })
                }
            </div>
            <div className={classes.messages}>
                {
                    props.messages.map(message => { return <MessageItem {...message} /> })
                }
                <div>
                    <div>
                        <textarea ref={textNewMessage} onChange={textareaOnChange} value={props.textNewMessage}/>
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