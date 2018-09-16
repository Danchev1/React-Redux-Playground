import React, { Component } from 'react'
import logo from './assets/images/logo.svg'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
        { name: '', age: 1000000 },
        { name: 'Hooker', age: 17 },
        { name: 'Nemo', age: 6 }
    ],
    anotherState: 'unused state'
  };

  switchNameHandler = (newValue) => {
    // console.log(this);
    // DON'T MUTATE DIRECTLY this.state.persons[0].name = 'Other name'; USE setState from Component library
    this.setState({
        persons: [
            { name: 'MGK', age: 28 },
            { name: newValue, age: 25 },
            { name: 'EMINEM', age: 46 }
        ]
    })
  };

  nameChangeHandler = (event) => {
      this.setState({
          persons: [
              { name: 'Mathew', age: 24 },
              { name: event.target.value, age: 57 },
              { name: 'Dinamo', age: 13 }
          ]
      })
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button type="button" onClick={this.switchNameHandler.bind(this, 'Iron Man')}>Switch</button>
        <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
        <hr />
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={() => this.switchNameHandler('Rakim')}
            changed={this.nameChangeHandler}>
        </Person>
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={() => this.switchNameHandler('Dr. Dre') }
            changed={this.nameChangeHandler}>
          <span>My hobbies: the usual</span>
        </Person>
        <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            click={() => this.switchNameHandler('J.Cole') }
            changed={this.nameChangeHandler}>
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
