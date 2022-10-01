import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange: (evt) => {
            const messageText = evt.target.value
           dispatch(updateNewMessageTextCreator(messageText))
        },
        onMessageClick: () => {
            dispatch(sendMessageCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer