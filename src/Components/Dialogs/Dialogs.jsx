import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import MessageForm from "./MessageForm/MessageForm";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <ul className={classes.listDialogs + ' ' + classes.list}>
                <DialogItem name='Arthur Shelby' id='1' message='Hello, when starts season?' image='user2.jpg'/>
                <DialogItem name='Michael Shelby' id='2' message="Hello, I'm returned Home!" image='user1.jpg'/>
                <DialogItem name='Curly' id='3' message='Tommy, your horse ready!' image='user4.jpg'/>
                <DialogItem name='Arthur Shelby' id='4' message='Hello, when starts season?' image='user2.jpg'/>
            </ul>
            <div className={classes.messagesBlock}>
                <ul className={classes.listMessages + ' ' + classes.list}>
                    <MessageItem name='Thomas Shelby' message="WTF, Arthur! Where's my money?" image='userDefault.jpg'/>
                    <MessageItem name='Thomas Shelby' message="Hello, when starts season?" image='user2.jpg'/>
                </ul>
                <MessageForm />
            </div>
        </div>
    );
};

export default Dialogs;