import classes from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";

const Navbar = (props) => {
    return (
        <ul className={classes.list + ' ' + classes.reset}>
            <NavItem link='/' icon='#Profile'/>
            <NavItem link='/dialogs' icon='#Dialogs'/>
            <NavItem link='/news' icon='#News'/>
            <NavItem link='/music' icon='#Music'/>
            <NavItem link='/settings' icon='#Settings'/>
        </ul>
    );
};

export default Navbar;