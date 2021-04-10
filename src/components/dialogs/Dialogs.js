import classes from './Dialogs.module.css';
import React from 'react';
import DialogItem from './dialogItem/DialogItem';
import MessageItem from './messageItem/MessageItem';
import { CreateActionAddMessage, CreateActionChangeTextNewMessage } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    let textNewMessage = React.createRef();

    const btnAddMessage = () => {
        props.dispatch(CreateActionAddMessage());
    }

    const textareaOnChange = (e) => {
        // props.dispatch(CreateActionChangeTextNewMessage(textNewMessage.current.value));
        props.dispatch(CreateActionChangeTextNewMessage(e.target.value));
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
                        <textarea ref={textNewMessage} onChange={textareaOnChange} value={props.textNewMessage}/>
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