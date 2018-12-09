import React, { Component } from 'react';
import Person from "./Person/Person";
import PropTypes from 'prop-types';

class PersonsList extends Component {
  constructor(props) {
    super(props);
    console.log('[PersonsList.js] inside constructor and this is props = ', props)
  }

  componentWillMount() { console.log('[PersonsList.js] inside componentWillMount()'); }

  componentDidMount() { console.log('[PersonsList.js] inside componentDidMount()'); }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE PersonsList.js] inside componentWillReceiveProps()', nextProps);
  }

/*
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE PersonsList.js] inside shouldComponentUpdate()', nextProps, nextState);
    return nextProps.persons !== this.props.persons;
  }
*/

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE PersonsList.js] inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE PersonsList.js] inside componentDidUpdate()');
  }

  render() {
    console.log('[PersonsList.js] inside render()');
    return this.props.persons.map((person, index) =>
        <Person
            name={person.name}
            age={person.age}
            click={() => this.props.deletePersonHandler(index)}
            changed={(event) => this.props.nameChangeHandler(event, person.id)}
            key={person.id}/>
    )
  }
}

PersonsList.propTypes = {
  persons: PropTypes.array,
  deletePersonHandler: PropTypes.func,
  nameChangeHandler: PropTypes.func
};

export default PersonsList;
