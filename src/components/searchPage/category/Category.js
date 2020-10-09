import React, {Component} from "react"; // so react can translate all jsx into js

class Category extends Component{

    constructor(){
        super();
        this.state={
            categorySelected: [],
        }
        this._handleClick = this._handleClick.bind(this)
    }

    _handleClick(){
        console.log(this.state.input)
       /* this.setState((previousState) => {

                return{
                    categorySelected: !previousState.categorySelected,
                }
            }
        )*/
    }
            
    _matchCategory(){
        
    }            
            

     render(){

         return(
             <div className="category">
                
                <div className="select">
                     <input type="radio" name="category" id="appetizer" value="Appetizer" onClick={this._handleClick}></input>
                   
                     <input type="radio" name="category" id="entree" value="Entree" onClick={this._handleClick}></input>

                     <input type="radio" name="category" id="dessert" value="Dessert" onClick={this._handleClick}></input>
                     
                 </div>

                

               {this.state.categorySelected ? this.props.recipe.recipeCategory: "nope"}  
             
             </div>


        


         )
     }
}



export default Category