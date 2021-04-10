import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_NEW_POST = 'CHANGE-TEXT-NEW-POST';

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_TEXT_NEW_MESSAGE = 'CHANGE-TEXT-NEW-MESSAGE';

export let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'this is post 1', likesCount: 15 },
                { id: 2, message: 'this is post 2', likesCount: 16 },
                { id: 3, message: 'this is post 3', likesCount: 17 },
                { id: 4, message: 'this is post 4', likesCount: 18 }
            ],
            textNewPost: ''
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    /* SUBSCRIBER OBSERVER */
    _subscriber() {
        alert('default subscriber');
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    /* GET STATE */
    getPosts() {
        return this._state.profilePage.posts;
    },
    getTextNewPost() {
        return this._state.profilePage.textNewPost;
    },
    getDialogs() {
        return this._state.dialogsPage.dialogs;
    },
    getMessages() {
        return this._state.dialogsPage.messages;
    },
    getTextNewMessage() {
        return this._state.dialogsPage.textNewMessage;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._subscriber();
    }
}

window.store = store;