import React, {Component} from "react";


class person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
}

   render() {
    return(
        <div>
            <h1>
               <label>Name</label> : <i>{this.props.name}</i>
                <br/>
                <label>Age</label>: <i>{this.props.age}</i>
            </h1>
        </div>
    );
   
}
}

export default person;

