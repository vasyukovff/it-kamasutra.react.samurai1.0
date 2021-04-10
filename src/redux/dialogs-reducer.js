const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_TEXT_NEW_MESSAGE = 'CHANGE-TEXT-NEW-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, title: 'Dialog 1' },
        { id: 2, title: 'Dialog 2' },
        { id: 3, title: 'Dialog 3' },
        { id: 4, title: 'Dialog 4' },
        { id: 5, title: 'Dialog 123' },
    ],
    messages: [
        { id: 1, message: 'message text 1' },
        { id: 2, message: 'message text 2' },
        { id: 3, message: 'message text 3' },
        { id: 4, message: 'message text 4' }
    ],
    textNewMessage: ''
};

const dialogsReducer = (state = initialState, action) => {
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