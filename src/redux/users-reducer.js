// import { follow, getUsers, unfollow } from "../api/api";

import { UserAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    pageSize: 4,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users.items,
                totalCount: action.users.totalCount
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFollowingProgress ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}

export const onFollow = (userId) => ({
    type: FOLLOW,
    userId: userId
})

export const onUnfollow = (userId) => ({
    type: UNFOLLOW,
    userId: userId
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})

export const onSetPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

export const onSetIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export const onSetIsFollowingProgress = (isFollowingProgress, userId) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFollowingProgress,
    userId
})


export const getUsersThunkCreator = (pageSize, page) => {
    return (dispatch) => {
        dispatch(onSetIsFetching(true));

        UserAPI.getUsers(pageSize, page).then(response => {
            dispatch(onSetIsFetching(false));
            dispatch(setUsers(response));
        })
    }
}

export const followThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(onSetIsFollowingProgress(true, userId));
        
        UserAPI.follow(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(onFollow(userId));
            }
            dispatch(onSetIsFollowingProgress(false, userId));
        })
    }
}

export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(onSetIsFollowingProgress(true, userId));
        UserAPI.unfollow(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(onUnfollow(userId));
            }
            dispatch(onSetIsFollowingProgress(false, userId));
        })
    }
}

export default usersReducer;