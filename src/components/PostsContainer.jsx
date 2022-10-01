import React from "react";
import {addPostActionCreator, updateNewPostTextCreator} from "../redux/profilePageReducer";
import Posts from "./Posts";

const PostsContainer = ({postsList, dispatch}) => {
    const addPosts = () => {
        dispatch(addPostActionCreator())

    }
    const onPostChange = (text) => {
        dispatch(updateNewPostTextCreator(text))
    }

    return (
        <Posts postsList={postsList} updateNewPostText={onPostChange} addPosts={addPosts}/>
    )
}

export default PostsContainer
