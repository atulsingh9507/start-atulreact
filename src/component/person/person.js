import React, {Component} from "react";
import personstyle from "./person.module.css";


class person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
}

   render() {
    console.log(personstyle)
    const style = {
        fontsize: "50px ",
        color: "red"
    }
    return(
        <div className={personstyle.personbox}>
            <h1>
               <label className={personstyle.label}>Name</label> :
               <i>{this.props.name}</i>
                <br/>
                <label style={style}>Age</label>: <i>{this.props.age}</i>
            </h1>
        </div>
    );
   
}
}

export default person;

