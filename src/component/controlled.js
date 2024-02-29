import React, {Component} from "react";



class controlled extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "atul kumar singh",
        };
    }

    changeHandler = (event) => {
      const name = event.target.value;
      this.setState({ name});
    };
   render() {
     return ( 
      <div>
        <form>
         <input type="text" name="user_name" value={this.state.name} onChange={this.changeHandler} />
        </form>
      </div>
     );
   }
}

export default controlled;