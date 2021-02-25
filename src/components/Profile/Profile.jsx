import React from "react";
import classes from "./Profile.module.css";
import Myposts from "./MyPosts/Myposts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import MypostsContainer from "./MyPosts/MypostsContainer";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <MypostsContainer />
    </div>
  );
};

export default Profile;
