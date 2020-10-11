import React, {Component} from "react";
import recipeData from "../../assests/data/recipe.json"
import Recipe from "../resultPage/Recipe.js"


const recipesArr = recipeData.recipes
let resultList = []

class Search extends Component{

    //constructor
    constructor(props){ 
        super(props);
        this.state = {
            hidden:null,
            visible:null,
            searched: true, // this is my search button state: needs to be true to work on first try??
            data: [], // this is my displayed result state
            inputValue: null, // what is inputed in the text box
            nameSelected: null, //Name radio box 
            ingredientSelected: null, // ingredient radio box
        };
        this._handleSearchClick = this._handleSearchClick.bind(this)
        this._handleNameClick = this._handleNameClick.bind(this)
        this._handleIngredientClick = this._handleIngredientClick.bind(this)
        this._handleChange = this._handleChange.bind(this);  
        //all callbacks are invoked function style, -> context will be global context so we need to make sure we bind the context to THIS specifcally 
        //all event listeners should be binded in constructors
        //if not binded the event wont be able to recongnize "this"
    }

    _handleAdvancedClick(){

    }

    // Methods
    _handleSearchClick(){ 
        this.setState((previousState) => {// this.setState: a method that takes a function
            return{
                searched: !previousState.searched
            }
        });
        this.filterName()
        this.filterIngredient() // console.log(e) <- interesting
        this.displayResults()
    }

    _handleNameClick(){
        this.setState(() => {
            return{
                nameSelected: true,
                ingredientSelected: false,
            }
            
        });
    }

    _handleIngredientClick(){
        this.setState(() => {
            return{
                ingredientSelected: true,
                nameSelected: false,
            }    
        });
    }
        

    _handleChange(e){ //react automatically passes event in e 
        this.setState( // bracket for "defining function" parentheses invoke something 
           {inputValue: e.target.value}
        );
    }

    filterName(){

        if(this.state.nameSelected && this.state.searched){ 
            recipesArr.forEach(r =>{
                if(r.title.toLowerCase().includes(this.state.inputValue.toLowerCase())){
                    resultList.push(r);
                }
            return(resultList)
            })
        }
    }

    filterIngredient(){

        if(this.state.ingredientSelected && this.state.searched){ 
            recipesArr.forEach(r =>{
                r.ingredients.forEach( ingredient =>{
                    if(ingredient.toLowerCase().includes(this.state.inputValue.toLowerCase())){
                        resultList.push(r);
                    }
                return(resultList)
                }
                    
                )
            })
        }
    }

    displayResults(){
        const listDisplay = resultList.map(r =>{
            // for each product i want product component based on data
            return(
              <Recipe key={r.name}productInfo={r}/>
            );
          }); 
          this.setState((previousState) =>{
              return{
                data:listDisplay,
                searched: !previousState.searched
              }
            }
          )
        if(resultList.length === 0){
            this.setState(
                {data: ["No results search again"]}
            )
        }
        resultList = []
    }

    render(){ //displayes new html elements
        return(
            <div className="searchCriteria">

                <input type = "text" value = {this.state.inputValue} placeholder = "Search For..." onChange = {this._handleChange}></input>
                <input type = "radio" value = {this.state.nameSelected} name="categories" id="Name" onClick = {this._handleNameClick}></input>
                    <label htmlFor="Name">Name</label>
                <input type = "radio" value = {this.state.ingredientSelected} name="categories" id="Ingredient" onClick = {this._handleIngredientClick}></input>
                    <label htmlFor="Ingredient">Ingredient</label>
                <button onClick={this._handleSearchClick}>Search!</button>
                <button onClick={this._handleAdvancedClick}>Advanced</button>
                {this.state.data}
            </div>

        );
    }

}


export default Search;