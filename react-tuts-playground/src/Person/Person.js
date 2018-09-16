import React from 'react'
import './Person.css'

const person = props => {
  // your function will receive one object regardless - object with passed props
  //  console.log(this);
    const personStyle = {
        backgroundColor: '#f8f8f8',
        marginBottom: '20px'
    };
  return (
    <div className="Person" style={personStyle}>
      <h4>This is a person component with some random number: {Math.floor(Math.random() * 30)} <em>(functional component)</em></h4>
      <h1>I am {props.name}, i am {props.age} years old.</h1>
      <hr />
      <button type="button" onClick={ props.click }>Change name</button>
      {props.children ? <p>{props.children}</p> : false}
      <hr />
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
  // props.children reserved world for passing content to child component like slots
}; // we can execute only short and simple expression in the curly brackets in other words NO control flow

export default person
