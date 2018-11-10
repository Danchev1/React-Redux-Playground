import React from 'react';
import classes from './Person.css';

const person = props => (
    <div className={classes.Person}>
      <h4>
          This is a person component with some random number: {Math.floor(Math.random() * 30)}
          <em>(functional component)</em>
       </h4>
      <h1>I am {props.name}, i am {props.age} years old.</h1>
      <hr />
      <button type="button" onClick={ props.click }>Delete person</button>
      {props.children ? <p>{props.children}</p> : false}
      <hr />
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
);

export default person
