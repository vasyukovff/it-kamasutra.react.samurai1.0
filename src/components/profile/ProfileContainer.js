import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfileThunkCreator, onTextareaOnChange, onAddPost, getProfileStatusThunkCreator, setProfileStatusThunkCreator } from './../../redux/profile-reducer';
import Profile from './Profile';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
            userId = this.props.myId;

        this.props.getProfileThunkCreator(userId);
        this.props.getProfileStatusThunkCreator(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.data.userId
})

export default compose(
    connect(mapStateToProps, { onAddPost, onTextareaOnChange, getProfileThunkCreator, getProfileStatusThunkCreator, setProfileStatusThunkCreator }),
    withAuthRedirect,
    withRouter
)(ProfileContainer);
