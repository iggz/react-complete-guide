import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const appHooks = props => {
    const [ personsState, setPersonsState ] = useState({
        persons: [
        { name: 'Igor', age: 31 },
        { name: 'Manu', age: 29 },
        { name: 'Stef', age: 26 }
        ],
        otherState: 'some other value'
    });

    console.log(personsState);

    const switchNameHandler = () => {
        // console.log('Was clicked!');
        // DONT DO THIS: this.state.persons[0].name = 'Maximilian';
    setPersonsState({
        persons: [
        { name: 'Maximilian', age: 31 },
        { name: 'Manu', age: 29 },
        { name: 'Stef', age: 27 }
        ]
    });
    }

    return (
        <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>My Hobbies: Biking</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
        </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'Does this work now?'))
}  

export default appHooks;
