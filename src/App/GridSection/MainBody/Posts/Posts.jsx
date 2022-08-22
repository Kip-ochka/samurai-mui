import { Box, Grid, TextField, Button, Typography } from '@mui/material'
import { PostInputs } from './PostsStyledComponents'
import Post from './Post/Post'
import SendIcon from '@mui/icons-material/Send'

const Posts = () => {
  return (
    <Box sx={{ pl: 4, pr: 4, display: 'flex', flexDirection: 'column' }}>
      <Box
        component='label'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          fontSize: '18px',
          fontSeight: 'bold',
          color: '#1976d2',
        }}
      >
        <Typography variant='subtitle1' color='primary' sx={{ pb: 1 }}>
          My posts
        </Typography>
        <TextField id='filled-basic' label='your news...' />
      </Box>
      <Button
        variant='contained'
        color='primary'
        endIcon={<SendIcon />}
        sx={{ width: '150px', alignSelf: 'end', mt: 1, mb: 1 }}
      >
        Send post
      </Button>
      <Grid>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Grid>
    </Box>
  )
}

export default Posts
