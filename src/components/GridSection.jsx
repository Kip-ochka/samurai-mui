import Grid from '@mui/material/Grid'
import NavSection from './NavSection'
import MainBody from './MainBody'

function GridSection({friendsData, profile, messages, dispatch}) {
    return (
        <Grid
            container
            spacing={4}
            sx={{pt: 4, flexGrow: 1, height: '100%'}}

        >
            <Grid item xs={3} sx={{height: '100%'}}>
                <NavSection friendsData={friendsData}/>
            </Grid>
            <Grid item xs={9} sx={{height: '100%'}} component='main'>
                <MainBody profilePage={profile} messagePage={messages} dispatch={dispatch}/>
            </Grid>

        </Grid>
    )
}

export default GridSection