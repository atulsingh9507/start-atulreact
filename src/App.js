
import './App.css';
import React, { Component} from 'react';
import Person from './component/Person/Person';

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
let Persons;
Persons = this.state.Persons.map((p) => {
return <Person name={p.name} age={p.age}></Person>
});

  return <div className='App'>{Persons}</div>;
}
}

export default App;
