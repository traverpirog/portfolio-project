import classes from './ProfileContent.module.css';
import ProfileAboutMe from "./ProfileAboutMe/ProfileAboutMe";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import ProfileGroups from "./ProfileGroups/ProfileGroups";
import ProfilePosts from "./ProfilePosts/ProfilePosts";

const ProfileContent = (props) => {

    let myProfileData = [
        {website: 'https://peakyblinders.tv/', phone: '+1 (111) 111-11-11', name: 'Thomas Shelby', email: 'thomas-shelby@gmail.com', address: 'Grace st., 2-18, Birmingham'}
    ]

    return (
        <div className={classes.block}>
            <ProfileAboutMe website={myProfileData[0].website} name={myProfileData[0].name} phone={myProfileData[0].phone} email={myProfileData[0].email} address={myProfileData[0].address}/>
            <ProfileFriends />
            <ProfilePosts updatePost={props.updatePost} addPost={props.addPost} posts={props.posts} newPostText={props.newPostText}/>
            <ProfileGroups />
        </div>
    );
};

export default ProfileContent;