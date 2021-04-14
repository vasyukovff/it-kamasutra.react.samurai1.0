const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_NEW_POST = 'CHANGE-TEXT-NEW-POST';


let initialState = {
    posts: [
        { id: 1, message: 'this is post 1', likesCount: 15 },
        { id: 2, message: 'this is post 2', likesCount: 16 },
        { id: 3, message: 'this is post 3', likesCount: 17 },
        { id: 4, message: 'this is post 4', likesCount: 18 }
    ],
    textNewPost: ''
};

const profileReducer = (state = initialState, action) => {
    const result = {...state};
    result.posts = [...state.posts];

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: result.textNewPost,
                likesCount: 0
            };

            result.posts.push(newPost);
            result.textNewPost = '';
            break;
        case CHANGE_TEXT_NEW_POST:
            result.textNewPost = action.text;
            break;
        default:
            break;
    }
    return result;
}

export const CreateActionAddPost = () => ({
    type: ADD_POST
})

export const CreateActionChangeTextNewPost = (textNewPost) => ({
    type: CHANGE_TEXT_NEW_POST,
    text: textNewPost
})


export default profileReducer;