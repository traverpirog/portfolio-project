import classes from './ProfileFriends.module.css';
import ProfileFriend from "./ProfileFriend/ProfileFriend";

const ProfileFriends = (props) => {
    return (
        <div className={classes.block}>
            <div className={classes.head}>
                <h2 className={classes.title}>Friends</h2>
                <a href="#" className={classes.link}>More</a>
            </div>
            <ul className={classes.list}>
                <ProfileFriend path='user1.jpg' id='1' name='Michael Shelby' status='Online'/>
                <ProfileFriend path='user2.jpg' id='2' name='Arthur Shelby' status='listening “Maybe Baby”'/>
                <ProfileFriend path='user3.jpg' id='3' name='Polly Gray' status='forever in hearts'/>
                <ProfileFriend path='user4.jpg' id='4' name='Curly' status='Online'/>
            </ul>
        </div>
    );
};

export default ProfileFriends;