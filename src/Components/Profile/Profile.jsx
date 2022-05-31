import classes from "./Profile.module.css";
import ProfileHead from "./ProfileHead/ProfileHead";
import ProfileContent from "./ProfileContent/ProfileContent";

const Profile = (props) => {
    return (
        <div className={classes.profileContainer}>
            <ProfileHead />
            <ProfileContent updatePost={props.updatePost} addPost={props.addPost} posts={props.posts} newPostText={props.newPostText}/>
        </div>
    );
};

export default Profile;