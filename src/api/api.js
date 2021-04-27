import axios from "axios"

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

export const getUsers = (pageSize, page) => {
    return axios.get(baseUrl + `users?count=${pageSize}&page=${page}`, { withCredentials: true }).then(response => response.data);
}

export const unfollow = (userId) => {
    return axios.delete(baseUrl + `follow/${userId}`,
        {
            withCredentials: true,
            headers: {
                "API-KEY": "8cc572da-38e6-49ab-a5f6-ce1b84a913a5"
            }
        }).then(response => response.data);
}

export const follow = (userId) => {
    return axios.post(baseUrl + `follow/${userId}`, {},
        {
            withCredentials: true,
            headers: {
                "API-KEY": "8cc572da-38e6-49ab-a5f6-ce1b84a913a5"
            }
        }).then(response => response.data);
}

export const getProfile = (profileId) => {
    return axios.get(baseUrl + `profile/${profileId}`).then(response => response.data);
}