import React, { Component } from 'react'
import logo from './assets/images/logo.svg'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <Person name="Thanos" age="1000000">
          My hobbies: finding stones, destroying people from frencheises
        </Person>
        <Person name="Hooker" age="17">
          <span>My hobbies: the usual</span>
        </Person>
        <Person name="Nemo" age="6">
          My hobies: swiming and being stupid
        </Person>
      </div>
    )

    // JSX gets compiled to this
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement(
    //     'h1',
    //     null,
    //     'This is how you render and nest elements with JSX'
    //   )
    // )
  }
}

export default App
