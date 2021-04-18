import axios from 'axios';
import React from 'react';
import UserItem from './UserItem';

let Users = (props) => {

    const addUser = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        })
    }

    return (
        <>
            <div>
                {
                    props.users.map(user => { return <UserItem {...user} onFollow={props.onFollow} onUnfollow={props.onUnfollow} key={user.id} /> })
                }
            </div>
            <button onClick={addUser}>AddUsers</button>
        </>
    )
}

export default Users;