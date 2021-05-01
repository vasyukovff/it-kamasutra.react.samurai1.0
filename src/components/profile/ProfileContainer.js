import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getProfileThunkCreator, onTextareaOnChange, onAddPost } from './../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
            userId = 2;

        this.props.getProfileThunkCreator(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to="/login" />
            
        return <>
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let WithRouterComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { onAddPost, onTextareaOnChange, getProfileThunkCreator })(WithRouterComponent);
