import React, { Component } from 'react';

class Text extends Component{
    
    constructor(){
        super();
        this.state = {   //an object with keyvalue pairs contains - all data that needs to be changed ober lifecyle of THIS component
            inputValue: '', //key value pair
            nameSelected: true,
            ingredientSelected: false,
        } 
        this._handleChange = this._handleChange.bind(this);  //all callbacks are invoked function style, -> context will be global context so we need to make sure we bind the context to THIS specifcally 
        this._handleClick = this._handleClick.bind(this);
    }

    _handleChange(e){ //react automatically passes event in e 
        this.setState( // bracket for "defining function" parentheses invoke something 
           {inputValue: e.target.value}
        );
    }

    _handleClick(e){
        this.setState((previousState) => {
            return{
                nameSelected: !previousState.nameSelected,
                ingredientSelected: !previousState.ingredientSelected
            }
        }
        );
    }


    //on click when one is true the other is false 

    render(){
        return(
            <div>
                <input type = "text" value = {this.state.inputValue} placeholder = "Search For..." onChange = {this._handleChange}></input>
                <input type = "radio" value = {this.state.nameSelected} name="categories" id="Name" onClick = {this._handleClick}></input>
                    <label htmlFor="Name">Name</label>
                <input type = "radio" value = {this.state.ingredientSelected} name="categories" id="Ingredient" onClick = {this._handleClick}></input>
                    <label htmlFor="Ingredient">Ingredient</label>
            </div>
        );
    }
}

/*<input type = "radio" value = {this.state.nameSelected} name="categories" id="Name" onClick = {this._handleClick}></input>
                    <label htmlFor="Name">Name</label>
                <input type = "radio" value = {this.state.ingredientSelected} name="categories" id="Ingredient" onClick = {this._handleClick}></input>
                    <label htmlFor="Ingredient">Ingredient</label>
*/



export default Text;