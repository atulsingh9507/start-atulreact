import React, { Component } from "react";

class Form extends Component {
    render() {
        return( 
            <div>
            <form>
                
            <input type="text" name="name" />
            
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            </form>
        </div>
    );
}
   
}


export default Form;