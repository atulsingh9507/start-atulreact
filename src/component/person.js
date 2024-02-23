import React, {Component} from "react";


class person extends Component {
  constructor(props) {
    super(props);
    this.props=props;
    this.state={
        name:"atul kumar singh",
        age: 22,
    }
}
nameChangeHandeler() {
    console.log(this.state);
    this.setState({ name: "vikash singh", age:27 }, () => {
        console.log(this.state);
    });
}
   render() {
    return(
        <div>
            <h1>
                <i>Dear {this.state.name},{this.state.age} year, welcome atul</i>
                <br/>
                <button onClick={() => this.nameChangeHandeler()}>click me </button>
            </h1>
        </div>
    );
   }
}

export default person;

