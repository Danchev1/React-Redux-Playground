import React from 'react';
import classes from './Person.css';
import Aux from '../../../HOC/Aux';
import hocWithClass from '../../../HOC/hocWithClass';
import { AuthenticationContext } from '../../../App';

const person = props => (
    <Aux>
      <h4>
        <AuthenticationContext.Consumer>
          {auth => auth ? <div>===== Authentication is TRUE ===== </div> : <div> ===== Authentication is FALSE =====</div>}
        </AuthenticationContext.Consumer>AuthenticationContext.Consumer>
          This is a person component with some random number: {Math.floor(Math.random() * 30)}
          <em>(functional component)</em>
       </h4>
      <h1>I am {props.name}, i am {props.age} years old.</h1>
      <hr />
      <button type="button" onClick={ props.click }>Delete person</button>
      {props.children ? <p>{props.children}</p> : false}
      <hr />
      <input type="text" onChange={props.changed} value={props.name}/>
    </Aux>
);

export default hocWithClass(person, classes.Person);
