import classes from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";

const Navbar = (props) => {
    return (
        <ul className={classes.list + ' ' + classes.reset}>
            <NavItem />
            <NavItem />
            <NavItem />
            <NavItem />
            <NavItem />
        </ul>
    );
};

export default Navbar;