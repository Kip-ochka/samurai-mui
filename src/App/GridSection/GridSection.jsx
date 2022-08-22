import Grid from '@mui/material/Grid'
import NavSection from './NavSection/NavSection'
import MainBody from './MainBody/MainBody'

export default function GridSection() {
  return (
    <Grid
      container
      spacing={4}
      sx={{ pt: 4, flexGrow: 1, height: '100%' }}
      className='lox'
    >
      <Grid item xs={3} sx={{ height: '100%' }}>
        <NavSection />
      </Grid>
      <Grid item xs={9} sx={{ height: '100%' }}>
        <MainBody />
      </Grid>
    </Grid>
  )
}
