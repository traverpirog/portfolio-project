import classes from './ProfileHead.module.css';
import ProfileName from "./ProfileName/ProfileName";
import Background from "./profileHeadBg.jpg"
import UserIcon from "./Images/user1.jpg";
import ProfileHeadInfo from "./ProfileHeadInfo/ProfileHeadInfo";

const ProfileHead = (props) => {
    return (
        <div className={classes.preview}  style={{backgroundImage:`url(${Background})`,}}>
            <ProfileName pathAva={UserIcon} name='Thomas Shelby' location='Burmingham'/>
            <ProfileHeadInfo subscribersCount='1512' postsCount='12' registerDate='2 years ago' />
        </div>
    )
};

export default ProfileHead;