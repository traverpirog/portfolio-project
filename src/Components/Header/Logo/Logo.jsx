import classes from './Logo.module.css';

const Logo = (props) => {
    return (
        <a href='/' className={classes.link}>
            <svg className={classes.icon} width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM31.6034 16L25.3384 18.3296C25.3384 18.3296 25.6158 24.7315 25.2859 36.1681C24.9564 47.6047 38.72 48 38.72 48C38.72 48 38.7016 41.819 38.6641 41.819C31.8852 41.819 31.6793 36.1907 31.6793 36.1907L31.6998 29.4424L38.7186 29.3755L38.6772 23.7722L31.6861 23.7119L31.6034 16Z" fill="#222222"/>
            </svg>
            <span className={classes.name}>Team Social</span>
            <span className={classes.caption}>social network</span>
        </a>
    );
};

export default Logo;