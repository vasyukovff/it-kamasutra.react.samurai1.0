import axios from 'axios';
import React from 'react';
import UserItem from './UserItem';

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return (
            <>
                <div>
                    {
                        this.props.users.map(user => { return <UserItem {...user} onFollow={this.props.onFollow} onUnfollow={this.props.onUnfollow} key={user.id} /> })
                    }
                </div>
            </>
        )
    }
}

export default Users;