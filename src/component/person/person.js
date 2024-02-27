import React, {Component} from "react";
import "./person.css";


class person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
}

   render() {
    const style = {
        fontsize: "50px ",
        color: "red"
    }
    return(
        <div className="personBox">
            <h1>
               <label className="personlabel">Name</label> :
               <i>{this.props.name}</i>
                <br/>
                <label style={style}>Age</label>: <i>{this.props.age}</i>
            </h1>
        </div>
    );
   
}
}

export default person;

