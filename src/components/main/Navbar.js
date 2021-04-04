import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.item + " " + classes.active}>
                <NavLink to="/profile" activeClassName={classes.active} >
                    Profile
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active} >
                    Messages
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active} >
                    News
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active} >
                    Music
                </NavLink>
            </div>
            <div className={classes.item}>
                <a href="#" >
                    Settings
                </a>
            </div>
        </nav>
    );
}

export default Navbar;