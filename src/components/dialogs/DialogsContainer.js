import React from 'react';
import { CreateActionAddMessage, CreateActionChangeTextNewMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from './../../StoreContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let stateDialogs = store.getState().dialogsPage;

                    const addMessage = () => {
                        store.dispatch(CreateActionAddMessage());
                    };

                    const textareaOnChange = (text) => {
                        store.dispatch(CreateActionChangeTextNewMessage(text));
                    };

                    return <Dialogs onAddMessage={addMessage}
                        onTextareaOnChange={textareaOnChange}
                        dialogs={stateDialogs.dialogs}
                        messages={stateDialogs.messages}
                        textNewMessage={stateDialogs.textNewMessage} />
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;