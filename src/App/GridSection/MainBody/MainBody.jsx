import {Paper} from '@mui/material'
import {Route, Routes} from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import UserSection from "./UserSection/UserSection";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";

export default function MainBody() {
    return (
        <Paper sx={{minHeight: '85vh'}}>
            <Routes>
                <Route path="/profile" element={<UserSection/>}/>
                <Route path="/dialogs" element={<Dialogs/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
        </Paper>
    )
}
