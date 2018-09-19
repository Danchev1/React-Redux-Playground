import React, { Component } from 'react'
import logo from './assets/images/logo.svg'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
        { id: 1, name: '', age: 1000000 },
        { id: 2, name: 'Hooker', age: 17 },
        { id: 3, name: 'Nemo', age: 6 }
    ],
    anotherState: 'unused state',
    showPersons: false
  };

  // switchNameHandler = newValue => {
  //   // console.log(this);
  //   // DON'T MUTATE DIRECTLY this.state.persons[0].name = 'Other name'; USE setState from Component library
  //   this.setState({
  //       persons: [
  //           { name: 'MGK', age: 28 },
  //           { name: newValue, age: 25 },
  //           { name: 'EMINEM', age: 46 }
  //       ]
  //   })
  // };


  nameChangeHandler = (event, id) => {
      this.setState({
          persons: [
              { name: 'Mathew', age: 24 },
              { name: event.target.value, age: 57 },
              { name: 'Dinamo', age: 13 }
          ]
      })
  };

  deletePersonHandler = (personIndex) => { // always update state in a immutable fashion - copy change set
    // const persons = this.state.persons;
    // const persons = this.state.persons.slice(); // slice without args copies the array
    const persons = [...this.state.persons]; // spreads elements in to the new array - we have new array with elements from old array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  toggleHandler = () => {
      const show = this.state.showPersons;
      this.setState({showPersons: !show});
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
        persons = (
            <div>
                {this.state.persons.map((person, index) =>
                    <Person
                    name={person.name}
                    age={person.age}
                    click={() => this.deletePersonHandler(index)}
                    changed={(event) => this.nameChangeHandler(event, person.id)}
                    key={person.id}/>
                )}
            </div>
        );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button type="button" onClick={this.toggleHandler}>Toggle</button>
        <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
        <hr />
        {persons}
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
