import { UserAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_NEW_POST = 'CHANGE-TEXT-NEW-POST';
const SET_PROFILE = 'SET-PROFILE';

let initialState = {
    posts: [
        { id: 1, message: 'this is post 1', likesCount: 15 },
        { id: 2, message: 'this is post 2', likesCount: 16 },
        { id: 3, message: 'this is post 3', likesCount: 17 },
        { id: 4, message: 'this is post 4', likesCount: 18 }
    ],
    textNewPost: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.textNewPost,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                textNewPost: ''
            }
        case CHANGE_TEXT_NEW_POST:
            return{
                ...state,
                textNewPost: action.text
            }
        case SET_PROFILE:
            return{
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export const onAddPost = () => ({
    type: ADD_POST
})

export const onTextareaOnChange = (textNewPost) => ({
    type: CHANGE_TEXT_NEW_POST,
    text: textNewPost
})

export const onSetProfile = (profile) => ({
    type: SET_PROFILE,
    profile: profile
})

export const getProfileThunkCreator = (profileId) => {
    return (dispatch) => {
        UserAPI.getProfile(profileId).then(response => {
            dispatch(onSetProfile(response));
        })
    }
}

export default profileReducer;