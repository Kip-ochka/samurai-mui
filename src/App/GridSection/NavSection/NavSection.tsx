import { Paper } from '@mui/material'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import ForumIcon from '@mui/icons-material/Forum'
import FeedIcon from '@mui/icons-material/Feed'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import NavButton from './NavButton/NavButton'

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
          <NavButton buttonText='Profile' icon={<PersonIcon />} />
          <NavButton buttonText='Messages' icon={<ForumIcon />} />
          <NavButton buttonText='News' icon={<FeedIcon />} />
          <NavButton buttonText='Music' icon={<LibraryMusicIcon />} />
        </div>
        <div>
          <NavButton buttonText='Settings' icon={<SettingsIcon />} />
        </div>
      </Paper>
    </>
  )
}
