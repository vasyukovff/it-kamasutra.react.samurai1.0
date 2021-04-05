import classes from './Dialogs.module.css';
import { React } from 'react';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>
                {props.title}
            </NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, title: 'Dialog 1' },
        { id: 2, title: 'Dialog 2' },
        { id: 3, title: 'Dialog 3' },
        { id: 4, title: 'Dialog 4' },
        { id: 5, title: 'Dialog 5' },
    ];

    let messagesData = [
        {id: 1, message: 'message text 1'},
        {id: 2, message: 'message text 2'},
        {id: 3, message: 'message text 3'},
        {id: 4, message: 'message text 4'}
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem {...dialogsData[0]} />
                <DialogItem {...dialogsData[1]} />
                <DialogItem {...dialogsData[2]} />
                <DialogItem {...dialogsData[3]} />
                <DialogItem {...dialogsData[4]} />
            </div>
            <div className={classes.messages}>
                <Message {...messagesData[0]} />
                <Message {...messagesData[1]} />
                <Message {...messagesData[2]} />
                <Message {...messagesData[3]} />
            </div>
        </div>
    );
}

export default Dialogs;