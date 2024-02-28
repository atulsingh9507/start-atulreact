
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
      
      ],
    isShow : true, 
    };
    this.toggleHendler = this.toggleHendler.bind(this);
  }
  buttonClickHandler =() => {
 console.log(this.state);
  };
toggleHendler() {
  this.setState({isShow: !this.state.isShow})
}

render() {
let Persons;
Persons = this.state.Persons.map((p, index) => {
return <Person key={index} name={p.name} age={p.age}></Person>
});

  return <div className='App'>
    <button onClick={this.toggleHendler}>Toggle</button>
    {
    this.state.isShow === true ? Persons : ""
    }
    </div>
}
}

export default App;
