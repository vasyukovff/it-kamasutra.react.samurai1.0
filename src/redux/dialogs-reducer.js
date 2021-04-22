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
    const result = {
        ...state
    };

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: result.textNewMessage
            };

            result.messages = [...state.messages, newMessage];
            result.textNewMessage = '';
            break;
        case CHANGE_TEXT_NEW_MESSAGE:
            result.textNewMessage = action.text;
            break;
        default:
            break;
    }
    return result;
}

export const onAddMessage = () => ({
    type: ADD_MESSAGE
})

export const onTextareaOnChange = (textNewMessage) => ({
    type: CHANGE_TEXT_NEW_MESSAGE,
    text: textNewMessage
})


export default dialogsReducer;