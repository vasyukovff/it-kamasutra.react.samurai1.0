import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfileThunkCreator, onTextareaOnChange, onAddPost } from './../../redux/profile-reducer';
import Profile from './Profile';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
            userId = 2;

        this.props.getProfileThunkCreator(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, { onAddPost, onTextareaOnChange, getProfileThunkCreator }),
    withAuthRedirect,
    withRouter
)(ProfileContainer);
