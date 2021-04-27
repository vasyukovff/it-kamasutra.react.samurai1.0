import axios from "axios"


export const getUsers = (pageSize, page) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${page}`, {withCredentials: true});
}