import React from 'react';
import classes from "./../Friends.module.css";

const Friend = (props) => {
    return (
        <div className={classes.friend}>{props.name}
        <img src={props.img}></img>
        </div>
    )
}

export default Friend;