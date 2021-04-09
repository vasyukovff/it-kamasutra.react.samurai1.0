const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_NEW_POST = 'CHANGE-TEXT-NEW-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.textNewPost,
                likesCount: 0
            };

            state.posts.push(newPost);
            state.textNewPost = '';
            break;
        case CHANGE_TEXT_NEW_POST:
            state.textNewPost = action.text;
            break;
        default:
            break;
    }
    return state;
}

export const CreateActionAddPost = () => ({
    type: ADD_POST
})

export const CreateActionChangeTextNewPost = (textNewPost) => ({
    type: CHANGE_TEXT_NEW_POST,
    text: textNewPost
})


export default profileReducer;