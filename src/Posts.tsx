import { Box, Grid, TextField } from '@mui/material'
import styled from '@emotion/styled'
import Post from './Post'
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
    <Box sx={{ pl: 4, pr: 4 }}>
      <PostInputs>
        My posts <TextField id="filled-basic" label="your news..." />
      </PostInputs>
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
