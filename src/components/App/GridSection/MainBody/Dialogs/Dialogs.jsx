import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";
import {Box, Button, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../../../redux/dialogPageReducer";


const Dialogs = ({dialogsData, dispatch}) => {
    const newMessageText = dialogsData.newDialogText
    const onMessageClick = () => {
        dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (evt) => {
        const messageText = evt.target.value
        dispatch(updateNewMessageTextCreator(messageText))
    }

    return (
        <div className={style.dialogs}>
            <div>
                {dialogsData.dialogs.map((dialog) => {
                    return <Dialog key={dialog.id} id={dialog.id} name={dialog.name}/>
                })}
            </div>
            <Box sx={{width: '100%', display: 'flex', flexDirection: 'column'}} className={style.messages}>
                {dialogsData.messages.map(message => {
                    return <Messages key={message.id} message={message.message}/>
                })}
                <TextField id="outlined-basic" label="SendMessage" variant="outlined" sx={{width: '100%'}}
                           value={newMessageText} onChange={onNewMessageChange} placeholder='Enter your message'/>
                <Button
                    onClick={() => {
                        onMessageClick()
                    }}
                    variant='contained'
                    color='primary'
                    endIcon={<SendIcon/>}
                    sx={{width: '200px', alignSelf: 'end', mt: 1, mb: 1}}
                >Send message</Button>

            </Box>
        </div>
    )


}

export default Dialogs