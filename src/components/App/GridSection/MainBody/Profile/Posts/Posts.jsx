import React from "react";
import {Box, Grid, Button, Typography} from '@mui/material'
import Post from './Post/Post'
import SendIcon from '@mui/icons-material/Send'
import {addPostActionCreator, updateNewPostTextCreator} from "../../../../../../redux/profilePageReducer";

const Posts = ({postsList, dispatch}) => {
    const newPostElement = React.createRef()

    const addPosts = () => {
        dispatch(addPostActionCreator())

    }
    const onPostChange = () => {
        let text = newPostElement.current.value
        dispatch(updateNewPostTextCreator (text))
    }

    return (
        <Box sx={{pl: 4, pr: 4, display: 'flex', flexDirection: 'column'}}>
            <Box
                component='form'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#1976d2',
                }}
            >
                <Typography variant='subtitle1' color='primary' sx={{display: 'flex', flexDirection: 'column'}}
                            component='label'>
                    My posts
                    <textarea ref={newPostElement} value={postsList.newPostText} onChange={onPostChange}
                              style={{resize: 'none', padding: '8px'}}/>
                </Typography>
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
            <Grid sx={{maxHeight: '28vh', overflow: 'auto'}}>
                {postsList.posts.map(data => {
                    return <Post key={data.id} textContent={data.message} likeCount={data.likeCount}/>
                })}
            </Grid>
        </Box>
    )
}

export default Posts
