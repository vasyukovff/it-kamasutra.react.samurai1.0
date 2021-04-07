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
    addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.textNewPost,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.textNewPost = '';
    
        this._subscriber();
    },
    addMessage(){
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.textNewMessage
        };
    
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.textNewMessage = '';
    
        this._subscriber();
    },
    /* CHANGE TEXT INPUT (TEXTAREA...) IN STATE */
    changeTextNewPost(textNewPost){
        this._state.profilePage.textNewPost = textNewPost;
        this._subscriber();
    },
    changeTextNewMessage(textNewMessage){
        this._state.dialogsPage.textNewMessage = textNewMessage;
        this._subscriber();
    }
}

window.store = store;