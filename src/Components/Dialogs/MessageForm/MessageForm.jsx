import classes from "./MessageForm.module.css";
import {useRef} from "react";

const MessageForm = (props) => {

    let newMessage = useRef();

    let addMessage = () => alert(newMessage.current.value);

    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <textarea ref={newMessage} name="message" className={classes.textarea} placeholder='Введите сообщение'></textarea>
                <button onClick={addMessage} className={classes.submit}>
                    <svg className={classes.svg} width="24" height="24" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.8151 12.1971L5.28308 13.4521C5.19649 13.4665 5.11522 13.5035 5.04746 13.5593C4.97971 13.6151 4.92784 13.6878 4.89708 13.7701L2.30008 20.7281C2.05208 21.3681 2.72108 21.978 3.33508 21.67L21.3351 12.6701C21.4595 12.6077 21.5641 12.512 21.6372 12.3935C21.7103 12.2751 21.749 12.1387 21.749 11.9996C21.749 11.8604 21.7103 11.724 21.6372 11.6056C21.5641 11.4871 21.4595 11.3914 21.3351 11.3291L3.33508 2.32905C2.72108 2.02205 2.05208 2.63205 2.30008 3.27105L4.89808 10.2291C4.92884 10.3113 4.98071 10.384 5.04846 10.4398C5.11622 10.4956 5.19749 10.5326 5.28408 10.5471L12.8161 11.8021C12.8631 11.8096 12.9058 11.8336 12.9367 11.8698C12.9676 11.906 12.9846 11.952 12.9846 11.9996C12.9846 12.0471 12.9676 12.0932 12.9367 12.1293C12.9058 12.1655 12.8631 12.1896 12.8161 12.1971H12.8151Z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default MessageForm;