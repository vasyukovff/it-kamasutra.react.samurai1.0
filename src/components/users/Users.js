import React from 'react';
import UserItem from './UserItem';

let Users = (props) => {
    return <div>
        {
            props.users.map(user => { return <UserItem {...user} />})
        }
    </div>
}

export default Users;