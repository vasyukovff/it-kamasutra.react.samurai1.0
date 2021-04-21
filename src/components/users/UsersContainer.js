import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setPageAC } from './../../redux/users-reducer';
import Users from './Users';


class UsersContainer extends React.Component {

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
        return <Users 
                    users={this.props.users}
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    onFollow={this.props.onFollow}
                    onUnfollow={this.props.onUnfollow} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {
            dispatch(followAC(userId));
        },
        onUnfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        onSetPage: (currentPage) => {
            dispatch(setPageAC(currentPage));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);