import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../../api/api';
import { onSetProfile, onTextareaOnChange, onAddPost } from './../../redux/profile-reducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId)
            userId = 2;

        getProfile(userId).then(response => {
            this.props.onSetProfile(response);
        })

    }

    render() {
        return <>
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        </>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithRouterComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { onAddPost, onTextareaOnChange, onSetProfile })(WithRouterComponent);
