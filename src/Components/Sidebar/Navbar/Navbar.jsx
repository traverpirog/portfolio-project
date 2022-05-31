import classes from "./Navbar.module.css";
import NavItem from "./NavItem/NavItem";



const Navbar = (props) => {
    return (
        <ul className={classes.list + ' ' + classes.reset}>
            {props.items.map((item, index) => <NavItem key={index} link={item.path} icon={'#' + item.name}/>)}
        </ul>
    );
};

export default Navbar;