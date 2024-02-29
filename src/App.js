
import './App.css';
import React, { Component} from 'react';
//import Person from './component/Person/Person';
import Controlled from './component/controlled';

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
    isShow: true, 
    };
    this.toggleHendler = this.toggleHendler.bind(this);
  }
  buttonClickHandler =() => {
 console.log(this.state);
  };
toggleHendler() {
  this.setState({isShow: !this.state.isShow})
}
 removeHandler =(PersonIndex) => {
const Person = this.state.Persons ;
Person.splice(PersonIndex, 1);
this.setState({Persons:Person});
 };
render() {
//let Persons;
//Persons = this.state.Persons.map((p, index) => {
//return <Person key={index} name={p.name} age={p.age} remove={() => this.removeHandler(index)}></Person>
//});
//
  return(
     <div className='App'>
  {/*<button onClick={this.toggleHendler}>Toggle</button>*/}
    {/*
    //this.state.isShow === true ? Persons : ""
*/ }
  <Controlled/> 
    </div>
    
);
 }
}

export default App;
