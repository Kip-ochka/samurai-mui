import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export default function Header() {
  return (
    <AppBar position='static' color='primary' sx={{ borderRadius: 1 }}>
      <Toolbar>
        <Typography variant='h5' component='span' sx={{fontSize:'50px'}}>
          Social media
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
