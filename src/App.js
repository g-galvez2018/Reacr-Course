import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max' , age: 28},
      {name: 'Manu' , age: 29},
      {name: 'Stephanie' , age: 26}
    ]
  }

  swicthNameHandler = (newName) =>{
    //console.log("this was clicked");
    this.setState({
      persons: [
        {name: 'Maximilian' , age: 28},
        {name: newName , age: 29},
        {name: 'Stephanie' , age: 27}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Max' , age: 28},
        {name: event.target.value , age: 29},
        {name: 'Steph' , age: 27}
      ]
    })
  }

 

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React APP</h1>
        <p>This is really working!</p>
        <button onClick={() => this.swicthNameHandler ('Gus')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.swicthNameHandler.bind(this,'Gustavo')}
          changed={this.nameChangedHandler}>My hobbies: Racing </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler} />
      </div>
    );
  }
}

export default App;
