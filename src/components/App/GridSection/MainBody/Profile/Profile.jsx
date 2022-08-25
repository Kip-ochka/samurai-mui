import React from 'react';
import UserSection from "./UserSection/UserSection";
import Posts from "./Posts/Posts";

const Profile = ({postsList, addPost}) => {
    return (
        <div>
            <UserSection/>
            <Posts postsList={postsList} addPost={addPost}/>
        </div>


    );
};

export default Profile;