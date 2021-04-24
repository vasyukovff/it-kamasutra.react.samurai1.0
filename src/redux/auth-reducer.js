const SET_USER_DATA = 'SET-USER-DATA';
const SET_ERROR_LOGIN = 'SET-ERROR-LOGIN';

let initialState = {
    data: {
        userId: null,
        email: null,
        login: null
    },
    errorLoginMessage: null,
    isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: {...action.data}
            }
        case SET_ERROR_LOGIN:
            debugger;
            return {
                ...state,
                errorLoginMessage: action.loginError
            }
        default:
            return state;
    }
}

export const onSetUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: { userId, email, login }
})

export const onSetErrorLogin = (errorMessage) => ({
    type: SET_ERROR_LOGIN,
    loginError: errorMessage
})

export default authReducer;