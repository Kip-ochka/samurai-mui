import {Paper} from '@mui/material'
import {Route, Routes} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";

import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Profile from "./Profile/Profile";

export default function MainBody({profilePage, messagePage, dispatch}) {
    return (
        <Paper sx={{height: '85vh'}}>
            <Routes>
                <Route path="/"
                       element={<Profile postsList={profilePage} dispatch={dispatch}/>}/>
                <Route path="/dialogs/*"
                       element={<Dialogs dialogsData={messagePage} dispatch={dispatch}/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
        </Paper>
    )
}
