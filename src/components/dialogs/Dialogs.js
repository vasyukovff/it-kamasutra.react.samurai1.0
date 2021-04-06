import classes from './Dialogs.module.css';
import React from 'react';
import DialogItem from './dialogItem/DialogItem';
import MessageItem from './messageItem/MessageItem';
import { GetDialogs, GetMessages } from './../../utils/index';

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
                    props.state.dialogs.map(dialog => { return <DialogItem {...dialog} /> })
                }
            </div>
            <div className={classes.messages}>
                {
                    props.state.messages.map(message => { return <MessageItem {...message} /> })
                }
                <div>
                    <div>
                        <textarea ref={textNewMessage} onChange={textareaOnChange} value={props.state.textNewMessage}/>
                    </div>
                    <div>
                        <button onClick={btnAddMessage}>Add new message</button>
                        <span>{props.state.textNewMessage}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;