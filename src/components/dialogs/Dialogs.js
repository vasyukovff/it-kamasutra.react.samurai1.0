import classes from './Dialogs.module.css';
import { React } from 'react';
import DialogItem from './dialogItem/DialogItem';
import MessageItem from './messageItem/MessageItem';

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, title: 'Dialog 1' },
        { id: 2, title: 'Dialog 2' },
        { id: 3, title: 'Dialog 3' },
        { id: 4, title: 'Dialog 4' },
        { id: 5, title: 'Dialog 123' },
    ];

    let messagesData = [
        { id: 1, message: 'message text 1' },
        { id: 2, message: 'message text 2' },
        { id: 3, message: 'message text 3' },
        { id: 4, message: 'message text 4' }
    ];

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