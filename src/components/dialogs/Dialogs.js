import classes from './Dialogs.module.css';
import { React } from 'react';
import DialogItem from './dialogItem/DialogItem';
import MessageItem from './messageItem/MessageItem';
import { GetDialogs, GetMessages } from './../../utils/index';

const Dialogs = (props) => {
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
            </div>
        </div>
    );
}

export default Dialogs;