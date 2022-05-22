import classes from './Menu.module.css';
import MenuItem from "./MenuItem/MenuItem";

const Menu = (props) => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.list + ' ' + classes.reset}>
                <MenuItem name='Home' link='/home'/>
                <MenuItem name='Community' link='/community'/>
                <MenuItem name='Pages' link='/pages'/>
                <MenuItem name='Shop' link='/shop'/>
            </ul>
        </nav>
    );
};

export default Menu;