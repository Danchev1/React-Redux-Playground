import React, { Component } from 'react'
import logo from './assets/images/logo.svg'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
        { name: 'Thanos', age: 1000000 },
        { name: 'Hooker', age: 17 },
        { name: 'Nemo', age: 6 }
    ],
    anotehrState: 'is I am'
  }

  switchNameHandler = (newValue) => {
    // console.log(this);
    // DONT DO THIS this.state.persons[0].name = 'Other name';
    this.setState({
        persons: [
            { name: newValue, age: 40 },
            { name: 'Old Hooker', age: 25 },
            { name: 'Nemo', age: 6 }
        ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <button type="button" onClick={this.switchNameHandler.bind(this, 'Iron Man')}>Switch</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Iron Man III')}>
          My hobbies: finding stones, destroying people from frencheises
        </Person>
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler('Iron Man - anonymous') }>
          <span>My hobbies: the usual</span>
        </Person>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={() => this.switchNameHandler('Iron Man - anonymous II') }>
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
