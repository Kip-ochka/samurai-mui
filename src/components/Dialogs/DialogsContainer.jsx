import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogPageReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = ({dialogsData, dispatch}) => {
    const onMessageClick = () => {
        dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (evt) => {
        const messageText = evt.target.value
        dispatch(updateNewMessageTextCreator(messageText))
    }

    return (
       <Dialogs dialogsData={dialogsData} onMessageClick={onMessageClick} onNewMessageChange={onNewMessageChange}/>
    )


}

export default DialogsContainer