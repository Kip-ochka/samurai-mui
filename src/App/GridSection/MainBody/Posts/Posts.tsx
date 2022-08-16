import { Box, Grid, TextField, Button, Typography } from '@mui/material'
import styled from '@emotion/styled'
import Post from './Post/Post'
import SendIcon from '@mui/icons-material/Send'
const PostInputs = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  font-weight: bold;
  color: #1976d2;
`
export default function Posts() {
  return (
    <Box sx={{ pl: 4, pr: 4, display: 'flex', flexDirection: 'column' }}>
      <PostInputs>
        <Typography variant='subtitle1' color='primary' sx={{ pb: 1 }}>
          My posts
        </Typography>
        <TextField id='filled-basic' label='your news...' />
      </PostInputs>
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
