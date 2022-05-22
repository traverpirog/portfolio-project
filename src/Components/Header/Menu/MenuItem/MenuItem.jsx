import classes from './MenuItem.module.css';

let MenuItem = (props) => {
    return (
        <li className={classes.item}>
            <a href={props.link} className={classes.link}>{props.name}</a>
        </li>
    );
};

export default MenuItem;