import React from 'react';
import classes from "./Profile.module.css";
import Myposts from "./MyPosts/Myposts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <Myposts postsData={props.profilePage.postsData} addPost={props.addPost}
       newPostText={props.profilePage.newPostText} 
       updateNewPostText={props.updateNewPostText}/>
    </div>
  )
}

export default Profile;
