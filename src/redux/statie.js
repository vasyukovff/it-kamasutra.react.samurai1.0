import { render } from './render';

export let state = {
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
}


export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.textNewPost,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.textNewPost = '';

    render(state);
}

export let addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.textNewMessage
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.textNewMessage = '';

    render(state);
}

export let changeTextNewMessage = (textNewMessage) => {
    state.dialogsPage.textNewMessage = textNewMessage;
    render(state);
}


export let changeTextNewPost = (textNewPost) => {
    state.profilePage.textNewPost = textNewPost;
    render(state);
}