import React from 'react'

const person = props => {
  // your function will receive one object regardless - object with passed props
  //  console.log(this);
  return (
    <div>
      <h4>
        This is a person component with some random number:
        { Math.floor(Math.random() * 30) }
        <em> (functional component)</em>
      </h4>
      <h1 onClick={ props.click }>
        I am { props.name }, i am { props.age } years old.
      </h1>
      <p>{ props.children }</p>
      <hr />
    </div>
  )
  // props.children reserved world for passing content to child component like slots
} // we can execute only short and simple expression in the curly brackets in other words NO control flow

export default person
