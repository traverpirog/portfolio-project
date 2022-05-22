import classes from './SignUp.module.css';

const SignUp = (props) => {
    return (
        <button className={classes.btn + ' ' + classes.reset}>Sign Up</button>
    );
};

export default SignUp;