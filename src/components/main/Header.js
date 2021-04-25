import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    debugger;
    return (
        <header className={classes.header}>
            <img src="https://place-hold.it/75" />

            <div className={classes.loginBlock}>
                {props.isAuth ? props.login :
                <NavLink to={'/login'} >Login</NavLink>}
            </div>
            {/* <span>
                <i>myEmail:</i> <b>{props.userData.email}</b> -
            </span>
            <span>
                - <i>myLogin:</i> <b>{props.userData.login}</b> -
            </span>
            <span>
                - <i>myId:</i> <b>{props.userData.userId}</b>
            </span>

            <div>
                ErrorLogin: {props.errorLoginMessage}
            </div> */}
        </header>
    );
}

export default Header;