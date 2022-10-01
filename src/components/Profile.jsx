import React from 'react';
import UserSection from "./UserSection";
import PostsContainer from "./Posts/PostsContainer";


const Profile = ({postsList, dispatch}) => {
    return (
        <div>
            <UserSection/>
            <PostsContainer postsList={postsList} dispatch={dispatch}/>
        </div>


    );
};

export default Profile;