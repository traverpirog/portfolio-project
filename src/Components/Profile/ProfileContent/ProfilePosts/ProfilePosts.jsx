import classes from './ProfilePosts.module.css';
import ProfilePost from "./ProfilePost/ProfilePost";
import ProfileForm from "./ProfileForm/ProfileForm";

const ProfilePosts = (props) => {

    let fixLikes = (count) => {
        return count > 999 ? Math.floor(count / 1000) + 'k' : count;
    }

    let posts = props.posts.map(p => (<ProfilePost key={p.id} image={p.image} likes={fixLikes( p.likes )} name={p.name} message={p.message} date={p.date}/>));

    return (
        <div className={classes.block}>
            <h2 className={classes.title}>Posts</h2>
            <ProfileForm updatePost={props.updatePost} addPost={props.addPost} newPostText={props.newPostText} />
            <ul className={classes.list}>
                {
                    posts
                }
            </ul>
        </div>
    );
};

export default ProfilePosts;