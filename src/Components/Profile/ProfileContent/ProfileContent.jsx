import classes from './ProfileContent.module.css';
import ProfileAboutMe from "./ProfileAboutMe/ProfileAboutMe";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import ProfileGroups from "./ProfileGroups/ProfileGroups";
import ProfilePosts from "./ProfilePosts/ProfilePosts";

const ProfileContent = (props) => {
    return (
        <div className={classes.block}>
            <ProfileAboutMe website='https://peakyblinders.tv/' name='Thomas Shelby' phone='+1 (111) 111-11-11' email='thomas-shelby@gmail.com' address='Grace st., 2-18, Birmingham'/>
            <ProfileFriends />
            <ProfilePosts />
            <ProfileGroups />
        </div>
    );
};

export default ProfileContent;