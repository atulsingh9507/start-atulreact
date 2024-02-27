
import './App.css';
import React, { Component} from 'react';
import Person from  '../component/Person/Person';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      Persons:[
        {
          name:"atul singh",
          age:24,
        },
        {
          name: "vikash singh",
          age:27,
        },
        {
          name:"aman singh",
          age:25,
        },
        {  name:"abhay singh",
          age:23
        }
      ]
    };
  }
  buttonClickHandler =() => {
 console.log(this.state);
  };


render() {
  return (
    <div className="App">
      <Person 
      name={this.state.persons[0].name}
       age={this.state.persons[0].name}
       />
        <Person 
      name={this.state.persons[1].name}
       age={this.state.persons[1].name}
       />
    </div>
  );
}
}

export default App;
