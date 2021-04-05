import classes from './Dialogs.module.css';
import { React } from 'react';
import DialogItem from './dialogItem/DialogItem';
import MessageItem from './messageItem/MessageItem';
import { GetDialogs, GetMessages } from './../../utils/index';

const Dialogs = () => {
    let dialogsData = GetDialogs();

    let messagesData = GetMessages();

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {
                    dialogsData.map(dialog => { return <DialogItem {...dialog} /> })
                }
            </div>
            <div className={classes.messages}>
                {
                    messagesData.map(message => { return <MessageItem {...message} /> })
                }
            </div>
        </div>
    );
}

export default Dialogs;