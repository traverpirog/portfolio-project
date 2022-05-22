import classes from "./Profile.module.css";
import ProfileHead from "./ProfileHead/ProfileHead";
import ProfileContent from "./ProfileContent/ProfileContent";

const Profile = (props) => {
    return (
        <div className={classes.profileContainer}>
            <ProfileHead />
            <ProfileContent />
        </div>
    );
};

export default Profile;