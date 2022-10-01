import Grid from '@mui/material/Grid'
import Body from './Body'
import NavSectionContainer from "./NavSection/NavSectionContainer";

function MainSection() {
    return (
        <Grid
            container
            spacing={4}
            sx={{pt: 4, flexGrow: 1, height: '100%'}}

        >
            <Grid item xs={3} sx={{height: '100%'}}>
                <NavSectionContainer/>
            </Grid>
            <Grid item xs={9} sx={{height: '100%'}} component='main'>
                <Body/>
            </Grid>

        </Grid>
    )
}

export default MainSection