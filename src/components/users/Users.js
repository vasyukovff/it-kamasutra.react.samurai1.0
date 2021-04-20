import axios from 'axios';
import React from 'react';
import UserItem from './UserItem';
import styles from './Users.module.css';

class Users extends React.Component {

    componentDidMount() {
        this.getUsers()
    }

    getUsers = (page = this.props.currentPage) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(response => {
            this.props.setUsers(response.data);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.onSetPage(pageNumber);
        this.getUsers(pageNumber);
    }

    render() {
        let pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        let pages = [];
        for(let i = 1; i <= pageCount && i < 10; i++)
        {
            pages.push(i);
        }

        return (
            <>
                <div>
                    {pages.map(p => {
                        return <span 
                                    className={this.props.currentPage === p && styles.selectedPage}
                                    onClick={() => {this.onPageChanged(p)}}
                                >{p}</span>
                    })}
                </div>
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