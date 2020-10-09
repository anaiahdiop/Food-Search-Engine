import React, {Component} from "react";
import Text from "./textbox/Text.js";

class Search extends Component{

    //constructor
    constructor(){ 
        super();
        this.state = {
            searched: false,
        };
        this._handleClick = this._handleClick.bind(this)
        //all event listeners should be binded in constructors
        //if not binded the event wont be able to recongnize "this"
    }

    // Methods
    _handleClick(){
        this.setState((previousState) => {// thi.setState: a method that takes a function
            return{
                searched: !previousState.searched 
            }
            }
        );
    }


    render(){ //displayes new html elements
        return(
            <div className="searchButton">
                <Text/>
                <button onClick={this._handleClick}>Search!</button>
            </div>

        );
        
    }
}


export default Search;