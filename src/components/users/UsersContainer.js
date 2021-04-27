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
import { getUsers } from '../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.getUsers()
    }

    getUsers = (page = this.props.currentPage) => {
        this.props.onSetIsFetching(true);

        getUsers(this.props.pageSize, page).then(response => {
            this.props.onSetIsFetching(false);
            this.props.setUsers(response);
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