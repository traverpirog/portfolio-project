import classes from './ProfileHeadInfo.module.css';

const ProfileHeadInfo = (props) => {
    return (
        <div className={classes.list}>
            <div className={classes.item}><span className={classes.acsent}>Subscribers:</span> {props.subscribersCount}</div>
            <div className={classes.item}><span className={classes.acsent}>Posts:</span> {props.postsCount}</div>
            <div className={classes.item}><span className={classes.acsent}>Registered</span>  {props.registerDate}</div>
        </div>
    );
};

export default ProfileHeadInfo;