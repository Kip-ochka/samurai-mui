import {Paper} from '@mui/material'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import ForumIcon from '@mui/icons-material/Forum'
import FeedIcon from '@mui/icons-material/Feed'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import MyNavLink from './MyNavLink/MyNavLink'
import {NavLink} from "react-router-dom";

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
                    <NavLink to='/profile' style={({isActive}) =>
                        isActive ? undefined : {textDecoration: 'none'}
                    }><MyNavLink icon={<PersonIcon sx={{height:'30px', width:'30px'}}/>}
                                 buttonText='Profile'/></NavLink>
                    <NavLink to='/dialogs' style={({isActive}) =>
                        isActive ? undefined : {textDecoration: 'none'}
                    }><MyNavLink icon={<ForumIcon sx={{height:'30px', width:'30px'}}/>}
                                 buttonText='Messages'/></NavLink>
                    <NavLink to='/news' style={({isActive}) =>
                        isActive ? undefined : {textDecoration: 'none'}
                    }><MyNavLink icon={<FeedIcon sx={{height:'30px', width:'30px'}}/>}
                                 buttonText='News'/></NavLink>
                    <NavLink to='/music' style={({isActive}) =>
                        isActive ? undefined : {textDecoration: 'none'}
                    }><MyNavLink icon={<LibraryMusicIcon sx={{height:'30px', width:'30px'}}/>}
                                 buttonText='Music'/></NavLink>
                </div>
                <div>
                    <NavLink to='/settings' style={({isActive}) =>
                        isActive ? undefined : {textDecoration: 'none'}
                    }><MyNavLink icon={<SettingsIcon sx={{height:'30px', width:'30px'}}/>}
                                 buttonText='Settings'/></NavLink>
                </div>
            </Paper>
        </>
    )
}
