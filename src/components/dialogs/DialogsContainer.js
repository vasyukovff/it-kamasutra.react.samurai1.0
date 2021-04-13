import React from 'react';
import { connect } from 'react-redux';
import { CreateActionAddMessage, CreateActionChangeTextNewMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textNewMessage: state.dialogsPage.textNewMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(CreateActionAddMessage());
        },
        onTextareaOnChange: (text) => {
            dispatch(CreateActionChangeTextNewMessage(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;