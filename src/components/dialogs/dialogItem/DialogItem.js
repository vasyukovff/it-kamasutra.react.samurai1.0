import classes from './DialogItem.module.css';
import { React } from 'react';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}>
                {props.title}
            </NavLink>
        </div>
    );
}

export default DialogItem;