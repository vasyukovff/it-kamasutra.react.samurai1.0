import React from 'react';
import { CreateActionAddMessage, CreateActionChangeTextNewMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let stateDialogs = props.store.getState().dialogsPage;

    const addMessage = () => {
        props.store.dispatch(CreateActionAddMessage());
    }

    const textareaOnChange = (text) => {
        props.store.dispatch(CreateActionChangeTextNewMessage(text));
    }

    return (<Dialogs onAddMessage={addMessage}
                        onTextareaOnChange={textareaOnChange}
                        dialogs={stateDialogs.dialogs}
                        messages={stateDialogs.messages}
                        textNewMessage={stateDialogs.textNewMessage} />);
}

export default DialogsContainer;