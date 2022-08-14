import Container from '@mui/material/Container'
import GridSection from './GridSection'
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
      <CssBaseline />
      <Header />
      <GridSection />
    </Container>
  )
}

export default App
