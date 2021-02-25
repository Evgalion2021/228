import preloaderGif from "./../../../assets/images/Ajux_loader.gif";
import classes from "./Preloader.module.css";
import React from "react";

let Preloader = (props) => {
    return <img className={classes.preloaderImg} src={preloaderGif} />
}

export default Preloader