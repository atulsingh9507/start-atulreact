import React, {Component} from "react";
import PersonStyle from "./Person.module.css";


class Person extends Component {
  constructor(props) {
    super(props);
    this.props = props;
}

   render() {
    return(
        <>
        <div className={PersonStyle.PersonBox}>
            <h1>
               <label className={PersonStyle.Label}>Name</label> ;
               <i>{this.props.name}</i>
                <br/>
            <label>Age </label>:<i>{this.props.age}</i> 
            </h1>
            </div>
        </>
    );
   
}
}

export default Person;

