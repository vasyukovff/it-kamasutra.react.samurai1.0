import axios from "axios"


export const getUsers = (pageSize, page) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${page}`, { withCredentials: true }).then(response => response.data);
}

export const unfollow = (userId) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
        {
            withCredentials: true,
            headers: {
                "API-KEY": "8cc572da-38e6-49ab-a5f6-ce1b84a913a5"
            }
        }).then(response => response.data);
}

export const follow = (userId) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {},
        {
            withCredentials: true,
            headers: {
                "API-KEY": "8cc572da-38e6-49ab-a5f6-ce1b84a913a5"
            }
        }).then(response => response.data);
}