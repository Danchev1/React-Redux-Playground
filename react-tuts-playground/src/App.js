import React, { Component } from 'react';
import Header from './components/Header/Header';
import PersonsList from './components/PersonsList/PersonsList';
import Aux from './HOC/Aux';

export const AuthenticationContext = React.createContext(false);

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] inside constructor and this is props = ', this);
  };

  state = {
    persons: [
      { id: 1, name: '', age: 1000000 },
      { id: 2, name: 'Hooker', age: 17 },
      { id: 3, name: 'Nemo', age: 6 }
    ],
    anotherState: 'unused state',
    showPersons: false,
    authenticated: false
  };

  componentWillMount() {
    console.log('[App.js] inside componentWillMount()');
  };

  componentDidMount() {
    console.log('[App.js] inside componentDidMount()');
  };

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE App.js] inside componentWillReceiveProps()', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside shouldComponentUpdate()', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate()');
  }

  nameChangeHandler = (event, id) => {
    // const person = this.state.persons.find(); - other way of finding
    const personIndex = this.state.persons.findIndex(item => {
      return item.id === id;
    });
    // const person = Object.assign({}, this.state.persons[personIndex]); - other way of copying object
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => { // always update state in a immutable fashion - copy change set
    // const persons = this.state.persons;
    // const persons = this.state.persons.slice(); // slice without args copies the array
    const persons = [...this.state.persons]; // spreads elements in to the new array - we have new array with elements
                                             // from old array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  toggleHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  };

  loginHandler = () => {
    const auth = this.state.authenticated;
    this.setState({ authenticated: !auth})
  };
  render() {
    console.log('[App.js] inside render()');
    let personsList = null;
    if (this.state.showPersons) {
      personsList = (
          <PersonsList
              persons={this.state.persons}
              deletePersonHandler={this.deletePersonHandler}
              nameChangeHandler={this.nameChangeHandler}/>
      );
    }

    return (
        <Aux>
          <Header persons={this.state.persons}
                  showPersons={this.state.showPersons}
                  loginState={this.loginHandler}
                  toggleHandler={this.toggleHandler}/>

          <AuthenticationContext.Provider value={this.state.authenticated}>
            {personsList}
          </AuthenticationContext.Provider>
        </Aux>
    )
  }
}

export default App
