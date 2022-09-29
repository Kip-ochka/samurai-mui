import Container from '@mui/material/Container'
import GridSection from './GridSection/GridSection'
import Header from './Header/Header'
import CssBaseline from '@mui/material/CssBaseline'

function App({state, dispatch}) {
    return (
        <Container
            sx={{
                p: 2,
                maxHeight: '100%',
            }}
        >
            <CssBaseline/>
            <Header/>
            <GridSection dispatch={dispatch} friendsData={state.sidebar}
                         profile={state.profilePage} messages={state.messagePage}/>
        </Container>
    )
}

export default App
