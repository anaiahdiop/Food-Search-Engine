import React, {Component} from "react"; // so react can translate all jsx into js

class Category extends Component{

    constructor(props){
        super(props);
        this.state={
            appetizer: null,
            entree: null,
            dessert: null,

        }
        this._handleAppetizerClick = this._handleAppetizerClick(this);
        this._handleEntreeClick = this._handleEntreeClick.bind(this);
        this._handleDessertClick = this._handleDessertClick.bind(this);
    }

    _handleAppetizerClick(){
        this.setState((previousState) =>{
            return{
                appetizer:!previousState.appetizer
            } 
        });
    }

    _handleEntreeClick(){
        this.setState((previousState) =>{
            return{
                entree: !previousState.entree
            } 
        });
    }
    
    _handleDessertClick(){
        this.setState((previousState) =>{
            return{
                dessert: !previousState.dessert
            }   
        });
        console.log(this.state.appetizer)
        console.log(this.state.entree)
        console.log(this.state.dessert)
        console.log("")
    }
    
     render(){
         return(
             <div className="category">
                <input type="checkbox" id="appetizer" name="appetizer" value={this.state.appetizer} onClick={this._handleAppetizerClick}></input>
                    <label htmlFor="appetizer">appetizer</label>
                <input type="checkbox" id="entree" name="entree" value={this.state.entree} onClick={this._handleEntreeClick}></input>
                    <label htmlFor="entree">entree</label>
                <input type="checkbox" id="dessert" name="dessert" value={this.state.dessert} onClick={this._handleDessertClick}></input>
                    <label htmlFor="dessert">dessert</label>
             </div>


        


         );
     }
}

export default Category