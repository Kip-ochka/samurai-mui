import React from 'react';
import UserSection from "./UserSection";
import PostsContainer from "./PostsContainer";


const Profile = ({postsList, dispatch}) => {
    return (
        <div>
            <UserSection/>
            <PostsContainer postsList={postsList} dispatch={dispatch}/>
        </div>


    );
};

export default Profile;