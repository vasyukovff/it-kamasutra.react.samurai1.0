import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "8cc572da-38e6-49ab-a5f6-ce1b84a913a5"
    }
});

export const getUsers = (pageSize, page) => {
    return instance.get(`users?count=${pageSize}&page=${page}`).then(response => response.data);
}

export const unfollow = (userId) => {
    return instance.delete(`follow/${userId}`).then(response => response.data);
}

export const follow = (userId) => {
    return instance.post(`follow/${userId}`, {}).then(response => response.data);
}

export const getProfile = (profileId) => {
    return instance.get(`profile/${profileId}`).then(response => response.data);
}