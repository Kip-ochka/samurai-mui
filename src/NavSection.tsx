import { Paper, Typography } from '@mui/material'
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'
import PersonIcon from '@mui/icons-material/Person'
import ForumIcon from '@mui/icons-material/Forum'
import FeedIcon from '@mui/icons-material/Feed'
import SettingsIcon from '@mui/icons-material/Settings'
import './NavSection.css'

export default function NavSection() {
  return (
    <>
      <Paper
        component="nav"
        elevation={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 1,
          minHeight: '85vh',
        }}
      >
        <div className="buttons_wrapper">
          <button className="button_wrapper">
            <PersonIcon />
            <Typography variant="button" color="initial">
              Profile
            </Typography>
          </button>
          <button className="button_wrapper">
            <ForumIcon />
            <Typography variant="button" color="initial">
              Messages
            </Typography>
          </button>
          <button className="button_wrapper">
            <FeedIcon />
            <Typography variant="button" color="initial">
              News
            </Typography>
          </button>
          <button className="button_wrapper">
            <LibraryMusicIcon />
            <Typography variant="button" color="initial">
              Music
            </Typography>
          </button>
        </div>
        <div className="buttons_wrappers">
          <button className="button_wrapper">
            <SettingsIcon />
            <Typography variant="button" color="initial">
              Setting
            </Typography>
          </button>
        </div>
      </Paper>
    </>
  )
}
