import {Paper} from '@mui/material'
import {Route, Routes} from "react-router-dom";
import News from "./News";
import Music from "./Music";
import Settings from "./Settings";
import Profile from "./Profile";
import DialogsContainer from "./Dialogs/DialogsContainer";

export default function Body({profilePage, messagePage, dispatch}) {
    return (
        <Paper sx={{height: '85vh'}}>
            <Routes>
                <Route path="/"
                       element={<Profile postsList={profilePage} dispatch={dispatch}/>}/>
                <Route path="/dialogs/*"
                       element={<DialogsContainer dialogsData={messagePage} dispatch={dispatch}/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
        </Paper>
    )
}
