import classes from './DialogItem.module.css';

const DialogItem = (props) => {
    return (
        <li className={classes.item}>
            <a href={'dialogs/' + props.id} className={classes.link}>
                <img className={classes.image} src={"avatars/" + props.image}
                     alt={'Аватарка пользователя - ' + props.name}/>
                <span className={classes.name}>{props.name}</span>
                <span className={classes.message}>{props.message}</span>
            </a>
        </li>
    );
};

export default DialogItem;