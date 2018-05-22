import React from 'react'

const person = props => {
  // your function will recieve one object regardless - object with passed props
  return (
    <div>
      <h4>
        This is a person component with some random number:
        {Math.floor(Math.random() * 30)}
        <em> (functional component)</em>
      </h4>
      <h1>
        I am {props.name}, i am {props.age} years old.
      </h1>
      <p>{props.children}</p>
      <hr />
    </div>
  )
  // props.children reserved world for passing content like slots
} // we can execute only shor and simple expression in the curly brackets in othe words NO control flow

export default person
