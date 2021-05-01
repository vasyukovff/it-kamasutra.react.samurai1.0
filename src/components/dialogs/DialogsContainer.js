import React from 'react';
import { connect } from 'react-redux';
import { onAddMessage, onTextareaOnChange } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        textNewMessage: state.dialogsPage.textNewMessage,
    }
}

export default compose(
    connect(mapStateToProps, {onAddMessage, onTextareaOnChange}),
    withAuthRedirect
)
(Dialogs);