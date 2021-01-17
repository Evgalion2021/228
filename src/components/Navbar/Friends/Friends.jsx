import React from 'react';
import classes from "./Friends.module.css";
import Friend from "./Friend/Friend.jsx";

const Friends = (props) => {
  console.log(props);
  let friendsElements = props.state.friendsData.map ((f) => {
    return <Friend name={f.name} img={f.img} />
  })
  
  return (
    <nav className={classes.topFriends}>
      {friendsElements}
    </nav>
  )
}

export default Friends;
