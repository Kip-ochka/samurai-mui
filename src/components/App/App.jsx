import Container from '@mui/material/Container'
import GridSection from './GridSection/GridSection'
import Header from './Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import {addPost} from "../../redux/state";

function App({state}) {
  return (
    <Container
      sx={{
        p: 2,
        maxHeight: '100%',
      }}
    >
      <CssBaseline />
      <Header />
      <GridSection friendsData={state.sidebar} profile={state.profilePage} messages={state.messagePage} addPost={addPost}/>
    </Container>
  )
}

export default App
