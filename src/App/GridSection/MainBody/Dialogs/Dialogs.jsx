import React from "react";
import l from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Avatar} from "@mui/material";

const DialogItem = ({id, name}) => {
    let style = `${l.dialog} ${l.activeDialog}`
    let path = `dialogs/${id}`
    return (
        <div className={style}>
            <Avatar/> <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

const Message = ({message}) => {
    return <div className={l.message}>{message}</div>

}
const Dialogs = (props) => {
    return (<div className={l.dialogs}>
            <div>
                <DialogItem id={1} name={'Dima'}/>
                <DialogItem id={2} name={'Sasha'}/>
                <DialogItem id={3} name={'Simon'}/>
                <DialogItem id={4} name={'Emil'}/>
                <DialogItem id={5} name={'Misha'}/>
                <DialogItem id={6} name={'Ekaterina'}/>
                <DialogItem id={7} name={'Igor'}/>
            </div>


            <div className={l.messages}>
                <Message message='hi'/>
                <Message message='how are you'/>
                <Message message='ti beatifull'/>
                <Message message='you will acheve'/>
            </div>
            </div>

    )


}

export default Dialogs