import React from "react";
import {Box, Grid, Button, Typography} from '@mui/material'
import Post from './Post/Post'
import SendIcon from '@mui/icons-material/Send'

const Posts = ({postsList, addPost, updatePostText}) => {

    const newPostElement = React.createRef()

    const addPosts = () => {
        let text = newPostElement.current.value
        addPost(text)

    }
    const onPostChange = () => {
        let text = newPostElement.current.value
        updatePostText(text)
    }

    return (
        <Box sx={{pl: 4, pr: 4, display: 'flex', flexDirection: 'column'}}>
            <Box
                component='label'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1976d2',
                }}
            >
                <Typography variant='subtitle1' color='primary' sx={{pb: 1}}>
                    My posts
                </Typography>
                <textarea ref={newPostElement} value={postsList.newPostText} onChange={onPostChange}/>
                {/*<TextField id='filled-basic' label='your news...' value={postsList.newPostText} onChange={handleInput}/>*/}
            </Box>
            <Button
                onClick={addPosts}
                variant='contained'
                color='primary'
                endIcon={<SendIcon/>}
                sx={{width: '150px', alignSelf: 'end', mt: 1, mb: 1}}
            >
                Send post
            </Button>
            <Grid>
                {postsList.posts.map(data => {
                    return <Post key={data.id} textContent={data.message} likeCount={data.likeCount}/>
                })}
            </Grid>
        </Box>
    )
}

export default Posts
