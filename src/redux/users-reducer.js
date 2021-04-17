const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        /*{ id: 1, photoUrl: 'https://place-hold.it/50', followed: false, fullName: 'Dmitry', status: 'iam a boss', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, photoUrl: 'https://place-hold.it/50', followed: true, fullName: 'Sasha', status: 'status ', location: { city: 'City Green', country: 'Gerany' } },
        { id: 3, photoUrl: 'https://place-hold.it/50', followed: false, fullName: 'Misha 2', status: 'haha a am .net developer', location: { city: 'Los Angeles', country: 'UA' } },
        { id: 4, photoUrl: 'https://place-hold.it/50', followed: false, fullName: 'Alexandr 3', status: 'software engeener', location: { city: 'Moscow', country: 'Russia' } }*/
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    debugger;
                    if (u.id === action.userId) {
                        debugger;
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
        case SET_USERS:{
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({
    type: FOLLOW,
    userId: userId
})

export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId: userId
})

export const setUsersAC = (users) => ({
    type: SET_USERS,
    users
})


export default usersReducer;