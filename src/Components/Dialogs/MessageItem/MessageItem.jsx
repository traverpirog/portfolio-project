import classes from './MessageItem.module.css';

const MessageItem = (props) => {
    return (
        <li className={classes.item}>
            <img className={classes.image} src={"/" + props.image} alt={'Аватарка пользователя - ' + props.name}/>
            <span className={classes.name}>{props.name}</span>
            <span className={classes.message}>{props.message}</span>
        </li>
    );
};

export default MessageItem;