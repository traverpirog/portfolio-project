import classes from './ProfilePost.module.css';

const ProfilePost = (props) => {
    return (
        <li className={classes.item}>
            <div className={classes.left}>
                <div className={classes.postInfo}>
                    <img className={classes.avaImg} src={`avatars/${props.path}`}
                         alt={`Аватарка пользователя - ${props.name}`}/>
                    <span className={classes.name}>{props.name}</span>
                    <span className={classes.date}>{props.date}</span>
                </div>
                <p className={classes.postMessage}>{props.message}</p>
            </div>
            <div className={classes.right}>
                <button className={classes.btn}>
                    <svg className={classes.likeIcon} width="24" height="24" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.7633 12.5085C21.157 11.9882 21.375 11.3507 21.375 10.6874C21.375 9.63508 20.7867 8.63898 19.8398 8.08351C19.5961 7.94053 19.3185 7.86528 19.0359 7.86555H13.4156L13.5563 4.98508C13.5891 4.28898 13.343 3.62804 12.8648 3.12414C12.6302 2.87577 12.3471 2.67815 12.0331 2.54351C11.7191 2.40887 11.3807 2.34005 11.0391 2.34133C9.82031 2.34133 8.74219 3.16164 8.41875 4.33586L6.40547 11.6249H6.39844V21.6562H17.468C17.6836 21.6562 17.8945 21.614 18.0891 21.5296C19.2047 21.0538 19.9242 19.964 19.9242 18.7546C19.9242 18.4593 19.882 18.1687 19.7977 17.8874C20.1914 17.3671 20.4094 16.7296 20.4094 16.0663C20.4094 15.771 20.3672 15.4804 20.2828 15.1991C20.6766 14.6788 20.8945 14.0413 20.8945 13.378C20.8898 13.0827 20.8477 12.7898 20.7633 12.5085V12.5085ZM2.625 12.3749V20.9062C2.625 21.321 2.96016 21.6562 3.375 21.6562H4.89844V11.6249H3.375C2.96016 11.6249 2.625 11.9601 2.625 12.3749Z"/>
                    </svg>
                </button>
                <span className={classes.likeValue}>{props.likes}</span>
                <span className={classes.dislikeValue}>{props.dislikes}</span>
            </div>
        </li>
    );
};

export default ProfilePost;