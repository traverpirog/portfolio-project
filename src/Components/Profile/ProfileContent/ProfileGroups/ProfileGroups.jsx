import classes from './ProfileGroups.module.css';
import ProfileGroup from "./ProfileGroup/ProfileGroup";

const ProfileGroups = (props) => {
    return (
        <div className={classes.block}>
            <div className={classes.head}>
                <h2 className={classes.title}>Groups</h2>
                <a href="#" className={classes.link}>More</a>
            </div>
            <ul className={classes.list}>
                <ProfileGroup path='group1.jpg' id='5' name='Typical Bookmaker' desc='Horse betting'/>
                <ProfileGroup path='group2.jpg' id='6' name='Irish Whiskey' desc='So delicious'/>
                <ProfileGroup path='group3.jpg' id='7' name='Shelby Limited' desc='Legitimate company'/>
            </ul>
        </div>
    );
};

export default ProfileGroups;