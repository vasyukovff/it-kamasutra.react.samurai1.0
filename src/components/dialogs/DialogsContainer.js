import React from 'react';
import { connect } from 'react-redux';
import { onAddMessage, onTextareaOnChange } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textNewMessage: state.dialogsPage.textNewMessage
    }
}

const DialogsContainer = connect(mapStateToProps, {onAddMessage, onTextareaOnChange})(Dialogs);

export default DialogsContainer;