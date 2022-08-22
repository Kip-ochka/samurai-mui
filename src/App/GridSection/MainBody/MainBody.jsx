import { Paper } from '@mui/material'
import Posts from './Posts/Posts'
import UserSection from './UserSection/UserSection'

export default function MainBody() {
  return (
    <main>
      <Paper sx={{ minHeight: '85vh' }}>
        <UserSection />
        <Posts />
      </Paper>
    </main>
  )
}
