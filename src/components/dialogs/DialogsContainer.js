import React from 'react';
import { connect } from 'react-redux';
import { onAddMessage, onTextareaOnChange } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textNewMessage: state.dialogsPage.textNewMessage,
    }
}

const withAuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {onAddMessage, onTextareaOnChange})(withAuthRedirectComponent);

export default DialogsContainer;