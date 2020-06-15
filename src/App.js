import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons: [
      {id: 'asd1', name: 'Max', age: 28},
      {id: 'asf1', name: 'John', age: 25},
       {id: 'afe11', name: 'Jack', age: 20}
     ],
     showPersons: false
   }
   deletePersonHandler = (personIndex) => {
    //  const persons = this.state.persons.slice(); - ALTERNATIVE
    const persons = [...this.state.persons];
     persons.splice(personIndex, 1);
     this.setState({persons: persons});
   }

   nameChangedHandler = (event) => {
    this.setState({
      persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 25},
      {name: 'Jack', age: 22}
    ]
    })
   }
   togglePersonsHandler = () => {
    const doesShow =this.state.showPersons;
    this.setState({showPersons: !doesShow});
   }

   render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}
              key={person.id}/>
          })}
        </div>
      );
    }

     return (
       <div className="App">
        <h1>It's a React app.</h1>
        <p>version 1.0</p>
        <button 
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement( 'div',{className:'App'},React.createElement( 'h1', null,'Does this work?'))
  }
}
export default App;