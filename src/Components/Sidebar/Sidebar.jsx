import classes from "./Sidebar.module.css";
import Hamburger from "./Hamburger/Hamburger";
import Navbar from "./Navbar/Navbar";

const Sidebar = (props) => {
    return (
        <aside className={classes.aside}>
            <Hamburger />
            <Navbar />
        </aside>
    );
};

export default Sidebar;