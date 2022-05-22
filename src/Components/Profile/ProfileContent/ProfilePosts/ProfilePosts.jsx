import classes from './ProfilePosts.module.css';
import ProfilePost from "./ProfilePost/ProfilePost";

const ProfilePosts = (props) => {
    return (
        <div className={classes.block}>
            <h2 className={classes.title}>Posts</h2>
            <ul className={classes.list}>
                <ProfilePost path='userDefault.jpg' likes='112' dislikes='2' name='Thomas Shelby' message='New season! Wait soon...' date='21 may 2022'/>
                <ProfilePost path='userDefault.jpg' likes='123213' dislikes='123' name='Thomas Shelby' message='End of the season... I will miss you!' date='16 january 2022'/>
            </ul>
        </div>
    );
};

export default ProfilePosts;