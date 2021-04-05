import classes from './Dialogs.module.css';
import { React } from 'react';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="/dialogs/1" activeClassName={classes.active}>
                        Dialogs 1
                    </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2" activeClassName={classes.active}>
                        Dialogs 2
                    </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3" activeClassName={classes.active}>
                        Dialogs 3
                    </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4" activeClassName={classes.active}>
                        Dialogs 4
                    </NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Message 1
                </div>
                <div className={classes.message}>
                    Message 2
                </div>
                <div className={classes.message}>
                    Message 3
                </div>
            </div>
        </div>
    );
}

export default Dialogs;