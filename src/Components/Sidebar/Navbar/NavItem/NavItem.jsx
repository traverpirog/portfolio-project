import classes from './NavItem.module.css';
import Sprite from './Icons/Sprite.svg';

console.log(Sprite);

const NavItem = (props) => {
    return (
        <li className={classes.item}>
            <a href="#" className={classes.link}>
                <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg">
                    <use xlinkHref={`${Sprite}#Profile`}></use>
                </svg>
            </a>
        </li>
    );
};

export default NavItem;