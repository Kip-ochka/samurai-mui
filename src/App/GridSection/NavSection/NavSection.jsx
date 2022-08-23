import {Paper} from '@mui/material'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import ForumIcon from '@mui/icons-material/Forum'
import FeedIcon from '@mui/icons-material/Feed'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import NavLink from './NavButton/NavLink'
import {Routes, Route, Link} from "react-router-dom";

export default function NavSection() {
    return (
        <>
            <Paper
                component='nav'
                elevation={6}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: 1,
                    minHeight: '85vh',
                }}
            >
                <div>
                    <Link to='/' style={{textDecoration: 'none'}}><NavLink href="/profile" buttonText='Profile'
                                                                           icon={<PersonIcon/>}/></Link>
                    <Link to='/dialogs' style={{textDecoration: 'none'}}><NavLink buttonText='Messages'
                                                                                  icon={<ForumIcon/>}/></Link>
                    <Link to='news' style={{textDecoration: 'none'}}><NavLink buttonText='News'
                                                                              icon={<FeedIcon/>}/></Link>
                    <Link to='music' style={{textDecoration: 'none'}}><NavLink buttonText='Music'
                                                                               icon={<LibraryMusicIcon/>}/></Link>
                </div>
                <div>
                    <Link to='settings' style={{textDecoration: 'none'}}><NavLink buttonText='Settings'
                                                                                  icon={<SettingsIcon/>}/></Link>
                </div>

            </Paper>
        </>
    )
}
