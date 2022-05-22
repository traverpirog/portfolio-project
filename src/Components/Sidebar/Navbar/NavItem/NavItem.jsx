import classes from './NavItem.module.css';
import Sprite from './Icons/Sprite.svg';
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return (
        <li className={classes.item}>
            <NavLink to={props.link} className={(navData => navData.isActive ? (classes.active + ' ' + classes.link) : classes.link)}>
                <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={Sprite + props.icon}></use>
                </svg>
            </NavLink>
        </li>
    );
};

export default NavItem;