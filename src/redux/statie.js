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
        }
    },
    /* SUBSCRIBER OBSERVER */
    _subscriber(){
        alert('default subscriber');
    },
    subscribe(observer){
        this._subscriber = observer;
    },
    /* GET STATE */
    getPosts(){
        return this._state.profilePage.posts;
    },
    getTextNewPost(){
        return this._state.profilePage.textNewPost;
    },
    getDialogs(){
        return this._state.dialogsPage.dialogs;
    },
    getMessages(){
        return this._state.dialogsPage.messages;
    },
    getTextNewMessage(){
        return this._state.dialogsPage.textNewMessage;
    },
    /* PUSH/ADD IN STATE */
    _addPost_OLD(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.textNewPost,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.textNewPost = '';
    
        this._subscriber();
    },
    _addMessage_OLD(){
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.textNewMessage
        };
    
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.textNewMessage = '';
    
        this._subscriber();
    },
    /* CHANGE TEXT INPUT (TEXTAREA...) IN STATE */
    _changeTextNewPos_OLD(textNewPost){
        this._state.profilePage.textNewPost = textNewPost;
        this._subscriber();
    },
    _changeTextNewMessage_OLD(textNewMessage){
        this._state.dialogsPage.textNewMessage = textNewMessage;
        this._subscriber();
    },
    dispatch(action){
        if(action.type === ADD_POST){
            this._addPost_OLD();
        } else if (action.type === CHANGE_TEXT_NEW_POST) {
            this._changeTextNewPos_OLD(action.text);
        }else if(action.type === ADD_MESSAGE){
            this._addMessage_OLD();
        } else if (action.type === CHANGE_TEXT_NEW_MESSAGE) {
            this._changeTextNewMessage_OLD(action.text);
        }
    }
}

export const CreateActionAddPost = () => ({
        type: ADD_POST
    })

export const CreateActionChangeTextNewPost = (textNewPost) => ({
        type: CHANGE_TEXT_NEW_POST,
        text: textNewPost
    })

export const CreateActionAddMessage = () => ({
        type: ADD_MESSAGE
    })

export const CreateActionChangeTextNewMessage = (textNewMessage) => ({
        type: CHANGE_TEXT_NEW_MESSAGE,
        text: textNewMessage
    })

export const fake = (textNewMessage) =>({
        type: CHANGE_TEXT_NEW_MESSAGE,
        text: textNewMessage
    })


window.store = store;