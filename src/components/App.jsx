import Container from '@mui/material/Container'
import MainSection from './MainSection'
import Header from './Header'
import CssBaseline from '@mui/material/CssBaseline'

function App() {
    return (
        <Container
            sx={{
                p: 2,
                maxHeight: '100%',
            }}
        >
            <CssBaseline/>
            <Header/>
            <MainSection/>
        </Container>
    )
}

export default App
