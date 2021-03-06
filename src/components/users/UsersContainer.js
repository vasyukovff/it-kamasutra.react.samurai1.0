import React from 'react';
import { connect } from 'react-redux';
import {
    onSetPage,
    onSetIsFollowingProgress,
    getUsersThunkCreator,
    followThunkCreator,
    unfollowThunkCreator
} from './../../redux/users-reducer';
import Users from './Users';
import Preloader from './../common/preloader/Preloader';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.getUsers();
    }

    getUsers = (page = this.props.currentPage) => {
        this.props.getUsers(this.props.pageSize, page);
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
                followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    connect(mapStateToProps,
        {
            onSetPage,
            onSetIsFollowingProgress,
            getUsers: getUsersThunkCreator,
            onFollow: followThunkCreator,
            onUnfollow: unfollowThunkCreator
        }),
    withAuthRedirect
)(UsersContainer);