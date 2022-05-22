import classes from "./Header.module.css";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import SignUp from "./SignUp/SignUp";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.left}>
                <Logo />
                <Menu />
            </div>
            <div className={classes.right}>
                <Search />
                <SignUp />
            </div>
        </header>
    );
};

export default Header;