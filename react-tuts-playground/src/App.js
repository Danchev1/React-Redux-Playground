import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
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

  nameChangeHandler = (event, id) => {
      // const person = this.state.persons.find(); - other way of finding
      const personIndex = this.state.persons.findIndex(item => {
          return item.id === id;
      });
      // const person = Object.assign({}, this.state.persons[personIndex]); - other way of copying object
      const person = {...this.state.persons[personIndex]};

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;
      this.setState({persons: persons});
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
    const btnStyle = {
        width: '160px',
        padding: '15px',
        margin: '10px',
        fontSize: '1.125rem',
        border: 'none',
        borderRadius: '2px',
        backgroundColor: this.state.showPersons ? '#f44a41' : '#42f48f',
        color: 'white',
        cursor: 'pointer',
        transition: 'background-color .15s ease',
        ':hover': {
            backgroundColor: '#77f499'
        }
    };
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
    let headingClasses = [];
    if (this.state.persons.length <= 2) {
        headingClasses.push('App-title', 'is-blue', 'is-bold');
    }
    return (
        <StyleRoot>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
              <h2 className={headingClasses.join(' ')}>Heading just for class test</h2>
            </header>
            <button type="button" style={btnStyle} onClick={this.toggleHandler}>Toggle</button>
            <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
            <hr />
            {persons}
          </div>
        </StyleRoot>
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

export default Radium(App)
