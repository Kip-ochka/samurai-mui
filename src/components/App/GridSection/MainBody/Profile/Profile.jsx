import React from 'react';
import UserSection from "./UserSection/UserSection";
import Posts from "./Posts/Posts";

const Profile = ({postsList, addPost, updatePostText}) => {
    return (
        <div>
            <UserSection/>
            <Posts postsList={postsList} addPost={addPost} updatePostText={updatePostText}/>
        </div>


    );
};

export default Profile;