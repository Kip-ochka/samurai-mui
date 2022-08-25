import React from 'react';
import UserSection from "./UserSection/UserSection";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div>
            <UserSection/>
            <Posts posts={props}/>
        </div>


    );
};

export default Profile;