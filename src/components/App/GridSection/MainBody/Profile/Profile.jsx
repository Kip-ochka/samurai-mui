import React from 'react';
import UserSection from "./UserSection/UserSection";
import Posts from "./Posts/Posts";

const Profile = ({postsList, dispatch}) => {
    return (
        <div>
            <UserSection/>
            <Posts postsList={postsList} dispatch={dispatch}/>
        </div>


    );
};

export default Profile;