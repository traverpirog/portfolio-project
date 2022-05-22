import classes from './ProfileFriend.module.css';

const ProfileFriend = (props) => {
    const avatarAlt = `Аватар пользователя - ${props.name}`;

    return (
        <li className={classes.item}>
            <a href={props.id} className={classes.link + ' ' + (props.status === 'Online' ? classes.statusLink : '')}>
                <img src={`avatars/${props.path}`} className={classes.avatar} alt={avatarAlt}/>
                <h3 className={classes.name}>{props.name}</h3>
                <span className={classes.status}>{props.status}</span>
            </a>
        </li>
    );
};

export default ProfileFriend;