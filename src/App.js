
import './App.css';
import React, { Component} from 'react';
import Person from './component/person/person.js';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  buttonClickHandler =() => {
 console.log(this.state);
  };


render() {
  return (
    <div className="App">
      <Person name="atul"age="23" />
      <Person name="vikash"age="27" />
      <button type="button" onClick={this.buttonClickHandler}>click me</button>
      <h1 className="label">testing </h1>
      
      
    </div>
  );
}
}

export default App;
