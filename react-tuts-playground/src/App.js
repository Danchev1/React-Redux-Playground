import React, { Component } from 'react';
import Header from './components/Header/Header';
import PersonsList from './components/PersonsList/PersonsList';


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
    let personsList = null;
    if (this.state.showPersons) {
        personsList = (
            <div>
                <PersonsList
                persons={this.state.persons}
                deletePersonHandler={this.deletePersonHandler}
                nameChangeHandler={this.nameChangeHandler}/>
            </div>
        );
    }

    return (
      <div>
        <Header
        persons={this.state.persons}
        showPersons={this.state.showPersons}
        toggleHandler={this.toggleHandler}/>
        <hr />
        {personsList}
      </div>
    )
  }
}

export default App
