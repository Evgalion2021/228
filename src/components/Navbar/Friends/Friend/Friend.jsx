import React from 'react';
import classes from "./../Friends.module.css";

const Friend = (props) => {
    return (
        <div className={classes.friend}>{props.name}
        <img href={props.img}></img>
        </div>
    )
}

export default Friend;