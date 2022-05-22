import classes from './ProfileAboutMe.module.css';

const ProfileAboutMe = (props) => {
    return (
        <div className={classes.block}>
            <h2 className={classes.title + ' ' + classes.reset}>About Me</h2>
            <ul className={classes.list + ' ' + classes.listReset}>
                <li className={classes.item}><span className={classes.caption}>Name:</span> <span className={classes.value}>{props.name}</span></li>
                <li className={classes.item}><span className={classes.caption}>Email:</span> <span className={classes.value}>{props.email}</span></li>
                <li className={classes.item}><span className={classes.caption}>Phone:</span> <span className={classes.value}>{props.phone}</span></li>
                <li className={classes.item}><span className={classes.caption}>Address:</span> <span className={classes.value}>{props.address}</span></li>
                <li className={classes.item}><span className={classes.caption}>Website:</span> <span className={classes.value}>{props.website}</span></li>
            </ul>
        </div>
    );
};

export default ProfileAboutMe;