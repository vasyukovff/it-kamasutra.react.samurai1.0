const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_TEXT_NEW_MESSAGE = 'CHANGE-TEXT-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.textNewMessage
            };

            state.messages.push(newMessage);
            state.textNewMessage = '';
            break;
        case CHANGE_TEXT_NEW_MESSAGE:
            state.textNewMessage = action.text;
            break;
        default:
            break;
    }
    return state;
}

export const CreateActionAddMessage = () => ({
    type: ADD_MESSAGE
})

export const CreateActionChangeTextNewMessage = (textNewMessage) => ({
    type: CHANGE_TEXT_NEW_MESSAGE,
    text: textNewMessage
})


export default dialogsReducer;