import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {getMeThunkCreator } from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getMeThunkCreator();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data.login
})

export default connect(mapStateToProps, {getMeThunkCreator})(HeaderContainer);