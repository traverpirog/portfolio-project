import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import MessageForm from "./MessageForm/MessageForm";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <ul className={classes.listDialogs + ' ' + classes.list}>
                { props.dialogs.map((d, index) => <DialogItem key={index} name={d.name} id={d.id} message={d.message} image={d.image}/>) }
            </ul>
            <div className={classes.messagesBlock}>
                <ul className={classes.listMessages + ' ' + classes.list}>
                    { props.messages.map((m, index) => <MessageItem key={index} name={m.name} message={m.message} image={m.image}/>) }
                </ul>
                <MessageForm/>
            </div>
        </div>
    );
};

export default Dialogs;