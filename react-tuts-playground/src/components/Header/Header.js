import React from 'react';
import classes from "./Header.css";
import logo from "../../assets/images/logo.svg";

const header = props => {
    let headingClasses = [];
    if (props.persons.length <= 2) {
        headingClasses.push(classes["App-title"], classes["is-blue"], classes["is-bold"]);
    }
    const btnStyle = {
        backgroundColor: props.showPersons ? '#f44a41' : '#42f48f',
    };

    return (
    <header>
        <img src={logo} className={classes["logo"]} alt="logo" />
        <h1 className={classes["Header-title"]}>Welcome to React</h1>
        <h2 className={headingClasses.join(' ')}>Heading just for class test</h2>
        <button type="button"
                className={classes.toggleBtn}
                style={btnStyle}
                onClick={props.toggleHandler}>Toggle</button>
    </header>
    )
};

export default header;