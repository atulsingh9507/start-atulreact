import React, {Component} from "react";


class person extends Component {
  constructor(props) {
    super(props);
    this.props=props;
  }
   render() {
    return(
        <div>
            <h1>
                <i>Dear {this.props.name},{this.props.age} year, welcome atul</i>
            </h1>
        </div>
    );
   }
}

export default person;

