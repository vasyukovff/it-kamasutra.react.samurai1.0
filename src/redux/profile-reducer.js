import { UserAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_TEXT_NEW_POST = 'CHANGE-TEXT-NEW-POST';
const SET_PROFILE = 'SET-PROFILE';
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS';

let initialState = {
    posts: [
        { id: 1, message: 'this is post 1', likesCount: 15 },
        { id: 2, message: 'this is post 2', likesCount: 16 },
        { id: 3, message: 'this is post 3', likesCount: 17 },
        { id: 4, message: 'this is post 4', likesCount: 18 }
    ],
    textNewPost: '',
    profile: null,
    status: null
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
        case SET_PROFILE_STATUS:
            return{
                ...state,
                status: action.status
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

export const onSetStatus = (status) => ({
    type: SET_PROFILE_STATUS,
    status: status
})

export const getProfileThunkCreator = (profileId) => {
    return (dispatch) => {
        UserAPI.getProfile(profileId).then(response => {
            
            dispatch(onSetProfile(response));
        })
    }
}

 export const getProfileStatusThunkCreator = (profileId) => {
     return(dispatch) => {
         UserAPI.getStatus(profileId).then(response => {
             dispatch(onSetStatus(response));
         })
     }
 }

 export const setProfileStatusThunkCreator = (status) => {
     return (dispatch) => {
         UserAPI.setStatus(status).then(response => {
             dispatch(onSetStatus(status));
         })
     }
 }

export default profileReducer;