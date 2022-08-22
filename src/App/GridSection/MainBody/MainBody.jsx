import {Paper} from '@mui/material'
import Dialogs from "../Dialogs/Dialogs";
import Profile from "./Profile/Profile";

export default function MainBody() {
    return (
        <main>
            <Paper sx={{minHeight: '85vh'}}>
                {/*<Profile/>*/}
                <Dialogs/>
            </Paper>
        </main>
    )
}
