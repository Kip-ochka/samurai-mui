import l from "../Dialogs.module.css";
import {Avatar} from "@mui/material";
import {NavLink} from "react-router-dom";
import React from "react";

const Dialog = ({id, name}) => {
    let style = `${l.dialog} ${l.activeDialog}`
    return (
        <div className={style}>
            <Avatar/> <NavLink to={`dialogs/${id}`}>{name}</NavLink>
        </div>
    )
}

export default Dialog