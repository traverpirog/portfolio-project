import classes from "./Hamburger.module.css";

const Hamburger = (props) => {
    return (
        <button className={classes.hamburger + ' ' + classes.reset}>
            <svg className={classes.svg} width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect className={classes.line} x="30" y="35" width="40" height="5" rx="2.5"/>
                <rect className={classes.line} x="30" y="47" width="40" height="5" rx="2.5"/>
                <rect className={classes.line} x="30" y="59" width="40" height="5" rx="2.5"/>
            </svg>
        </button>
    );
};

export default Hamburger;