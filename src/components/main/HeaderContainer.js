import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { onSetUserData, onSetErrorLogin } from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0){
                    let data = response.data.data;
                    this.props.onSetUserData(data.id, data.email, data.login);
                }
                else{
                    this.props.onSetErrorLogin(response.data.messages);
                }
            });
    }

    render() {
        debugger;
        return (
            <Header userData={this.props.userData} errorLoginMessage={this.props.errorLoginMessage}/>
        )
    }
}

let mapStateToProps = (state) => ({
    userData: state.auth.data,
    errorLoginMessage: state.auth.errorLoginMessage
})

export default connect(mapStateToProps, {onSetUserData, onSetErrorLogin})(HeaderContainer);