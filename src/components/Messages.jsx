import l from "./Dialogs/Dialogs.module.css";
import React from "react";

const Messages = ({id, message}) => {
    return <div key={id} className={l.message}>{message}</div>

}

export default Messages