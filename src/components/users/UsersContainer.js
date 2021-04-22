import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import {
    onFollow,
    onUnfollow,
    setUsers,
    onSetPage,
    onSetIsFetching
        } from './../../redux/users-reducer';
import Users from './Users';
import Preloader from './../common/preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.getUsers()
    }

    getUsers = (page = this.props.currentPage) => {
        this.props.onSetIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`).then(response => {
            this.props.onSetIsFetching(false);
            this.props.setUsers(response.data);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.onSetPage(pageNumber);
        this.getUsers(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                users={this.props.users}
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                onFollow={this.props.onFollow}
                onUnfollow={this.props.onUnfollow} />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps,
    {
        onFollow,
        onUnfollow,
        setUsers,
        onSetPage,
        onSetIsFetching
    })(UsersContainer);