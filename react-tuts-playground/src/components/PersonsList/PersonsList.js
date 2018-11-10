import React from 'react';
import Person from "./Person/Person";

const personsList = props => (props.persons.map((person, index) =>
        <Person
        name={person.name}
        age={person.age}
        click={() => props.deletePersonHandler(index)}
        changed={(event) => props.nameChangeHandler(event, person.id)}
        key={person.id} />
    )
);

export default personsList;
