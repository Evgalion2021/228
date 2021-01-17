import React from 'react';
import classes from "./Profile.module.css";
import Myposts from "./MyPosts/Myposts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <Myposts postsData={props.state.postsData} />
    </div>
  )
}

export default Profile;
