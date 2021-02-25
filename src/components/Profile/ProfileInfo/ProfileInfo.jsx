import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import classes from "./ProfileInfo.module.css";
import ProfileStatus from './ProfileStatus/ProfileStatus';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={classes.info}>
            <div className={classes.profileImage}>
                <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
            </div>
            <img src={props.profile.photos.large} />
            <div className={classes.description}>description</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
    )
}

export default ProfileInfo;
