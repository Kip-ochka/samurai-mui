import React from "react";
import l from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";


const Dialogs = ({dialogsData}) => {
    return (
        <div className={l.dialogs}>
            <div>
                {dialogsData.dialogs.map((dialog) => {
                    return <Dialog key={dialog.id} id={dialog.id} name={dialog.name}/>
                })}
            </div>
            <div className={l.messages}>
                {dialogsData.messages.map(message => {
                    return <Messages key={message.id} message={message.message}/>
                })}
            </div>
        </div>
    )


}

export default Dialogs