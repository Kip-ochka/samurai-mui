import Container from '@mui/material/Container'
import GridSection from './GridSection/GridSection'
import Header from './Header/Header'
import CssBaseline from '@mui/material/CssBaseline'

function App({state, updatePostText, addPost}) {
    return (
        <Container
            sx={{
                p: 2,
                maxHeight: '100%',
            }}
        >
            <CssBaseline/>
            <Header/>
            <GridSection updatePostText={updatePostText} friendsData={state.sidebar}
                         profile={state.profilePage} messages={state.messagePage} addPost={addPost}/>
        </Container>
    )
}

export default App
