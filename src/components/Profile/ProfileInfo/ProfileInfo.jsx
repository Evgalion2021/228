import React from 'react';
import classes from "./ProfileInfo.module.css";


const ProfileInfo = () => {
    return (
        <div className={classes.info}>
            <div className={classes.profileImage}>
            <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
            </div>
            <div className={classes.avatarImage}>avatar</div>
            <div className={classes.description}>description</div>
        </div>
    )
}

export default ProfileInfo;
