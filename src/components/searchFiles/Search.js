import React, {Component} from "react";
import recipeData from "../../assests/data/recipe.json"
import Recipe from "../recipeFiles/Recipe.js"
import Category from "./Category.js"




const recipesArr = recipeData.recipes
let resultList = []
let categoryList = []
let timeList = []

class Search extends Component{

    //constructor
    constructor(props){ 
        super(props);
        this.state = {
            appetizer: false,
            entree: false,
            dessert: false,
            lowTime:false,
            middleTime:false,
            highTime:false,
            visibility:true,
            hidden: "hidden",
            searched: true, // this is my search button state: needs to be true to work on first try??
            data: [], // this is my displayed result state
            inputValue: null, // what is inputed in the text box
            nameSelected: true, //Name radio box 
            ingredientSelected: false, // ingredient radio box
        };
        this._handleLowTimeClick = this._handleLowTimeClick.bind(this);
        this._handleMiddleTimeClick = this._handleMiddleTimeClick.bind(this);
        this._handleHighTimeClick = this._handleHighTimeClick.bind(this);
        this._handleAppetizerClick = this._handleAppetizerClick.bind(this);
        this._handleEntreeClick = this._handleEntreeClick.bind(this);
        this._handleDessertClick = this._handleDessertClick.bind(this);
        this._handleSearchClick = this._handleSearchClick.bind(this);
        this._handleNameClick = this._handleNameClick.bind(this);
        this._handleIngredientClick = this._handleIngredientClick.bind(this);
        this._handleAdvancedClick = this._handleAdvancedClick.bind(this);
        this._handleChange = this._handleChange.bind(this);  
        //this.filterCategory = this.filterCategory.bind(this);
        //all callbacks are invoked function style, -> context will be global context so we need to make sure we bind the context to THIS specifcally 
        //all event listeners should be binded in constructors
        //if not binded the event wont be able to recongnize "this"
    }

    // Methods

    _handleAdvancedClick(){
        this.setState((previousState) =>{
            return{
                visibility:!previousState.visibility,
            } 
        });
        if(!this.state.visibility){
            this.setState(
                {hidden:"hidden"}
            )
        }
        else{
            this.setState(
                {hidden:""}
            )
        }
    }
    //Time Selection 
    _handleLowTimeClick(){
        this.setState((previousState) =>{
            return{
                lowTime:!previousState.lowTime,
            } 
        });
    }

    _handleMiddleTimeClick(){
        this.setState((previousState) =>{
            return{
                middleTime:!previousState.middleTime,
            } 
        });
    }

    _handleHighTimeClick(){
        this.setState((previousState) =>{
            return{
                highTime:!previousState.highTime,
            } 
        });
    }

    //Category Seelection
    _handleAppetizerClick(){
        this.setState((previousState) =>{
            return{
                appetizer:!previousState.appetizer,
            } 
        });
    }

    _handleEntreeClick(){
        this.setState((previousState) =>{
            return{
                entree: !previousState.entree,
            } 
        });
    }
    
    _handleDessertClick(){
        this.setState((previousState) =>{
            return{
                dessert: !previousState.dessert,
            }   
        });
    }
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

    filterCategory(){
        if(this.state.searched && this.state.appetizer){
            resultList.forEach(r => {
                if((!categoryList.includes(r) && r.recipeCategory) === "Appetizer"){
                    categoryList.push(r)
                    
                }
            });
        }      
        if(this.state.searched && this.state.entree){
            resultList.forEach(r => {
                if((!categoryList.includes(r) && r.recipeCategory) === "Entree"){
                    categoryList.push(r)
                    
                }
            });
        } 
        if(this.state.searched && this.state.dessert){
            resultList.forEach(r => {
                if((!categoryList.includes(r) && r.recipeCategory) === "Dessert"){
                    categoryList.push(r)
                    
                }
            });
        } 

        
        return(categoryList);
        
    }     

    filterTime(){
        console.log(resultList)
        if(this.state.searched && this.state.lowTime){
            resultList.forEach(r => {
                if((!timeList.includes(r) && (0 <= r.prepTime && r.prepTime <= 30))){
                    timeList.push(r)
                    
                }
            });
        } 
        
        if(this.state.searched && this.state.middleTime){
            resultList.forEach(r => {
                if((!timeList.includes(r) && (31 <= r.prepTime && r.prepTime <= 60))){
                    timeList.push(r)
                    
                }
            });
        }


        if(this.state.searched && this.state.highTime){
            resultList.forEach(r => {
                if((!timeList.includes(r) && (r.prepTime >= 61))){
                    timeList.push(r)   
                }
            });
        }

        
        return(timeList);

    }

    filterName(){
        if(this.state.inputValue === null){
            this.filterOnlyCategory()
            this.filterOnlyTime()
            this.compareSelected()
        }
        else{
            if(this.state.nameSelected && this.state.searched){ 
                recipesArr.forEach(r =>{
                    if(r.title.toLowerCase().includes(this.state.inputValue.toLowerCase())){
                        resultList.push(r);
                    }
                return(resultList);
                })
            if(this.state.appetizer || this.state.entree || this.state.dessert || this.state.lowTime || this.state.middleTime || this.state.highTime){
                this.filterCategory()
                this.filterTime()
                this.compareSelected()
                }
            }
        }
    }

    filterIngredient(){
        if(this.state.inputValue === null){
            this.filterOnlyCategory()
            this.filterOnlyTime()
            this.compareSelected()
        }
        else{
            if(this.state.ingredientSelected && this.state.searched){ 
                recipesArr.forEach(r =>{
                    r.ingredients.forEach( ingredient =>{
                        if(!resultList.includes(r) && ingredient.toLowerCase().includes(this.state.inputValue.toLowerCase())){
                            resultList.push(r);
                        }
                        return(resultList);
                    })
            })
            if(this.state.appetizer || this.state.entree || this.state.dessert || this.state.lowTime || this.state.middleTime || this.state.highTime){
                this.filterCategory()
                this.filterTime()
                this.compareSelected()
                }
            }
        }
    }

    filterOnlyCategory(){
        if(this.state.inputValue == null){

            if(this.state.searched&& this.state.appetizer){
                recipesArr.forEach(r => {
                    if((!categoryList.includes(r) && r.recipeCategory) === "Appetizer"){
                        categoryList.push(r)
                    }
                });
            }      
            if(this.state.searched&& this.state.entree){
                recipesArr.forEach(r => {
                    if((!categoryList.includes(r) && r.recipeCategory) === "Entree"){
                        categoryList.push(r)
                    }
                });       
            }

            if(this.state.searched && this.state.dessert){
                recipesArr.forEach(r => {
                    if((!categoryList.includes(r) && r.recipeCategory) == "Dessert"){
                        categoryList.push(r)
                    }
                });
            }            
            return(categoryList);
        }
    }

    filterOnlyTime(){
        if(this.state.inputValue == null){
            if(this.state.searched && this.state.lowTime){
                recipesArr.forEach(r => {
                    console.log(r.prepTime)
                    if((!timeList.includes(r)) && (0 <= r.prepTime && r.prepTime <= 30)){
                        timeList.push(r)
                        
                    }
                });
            } 
            if(this.state.searched && this.state.middleTime){
                recipesArr.forEach(r => {
                    console.log(r.prepTime)
                    if((!timeList.includes(r)) && (r.prepTime >= 31) && (r.prepTime <= 60)){
                        timeList.push(r)
                
                    }
                });
            }
    
            if(this.state.searched && this.state.highTime){
                recipesArr.forEach(r => {
                    if((!timeList.includes(r)) && (r.prepTime >= 61)){
                        timeList.push(r)   
                    }
                });
            }
            return(timeList);
        }
    }
    
    compareSelected(){ //comparing time and category lists

        if((!this.state.appetizer && !this.state.entree && !this.state.dessert) && (timeList.length > 0)){
            categoryList = timeList
        }

        if((!this.state.lowTime && !this.state.middleTime && !this.state.highTime) && (categoryList.length > 0)){
            timeList = categoryList
        }
        
        resultList = categoryList.filter(r => timeList.includes(r)); // to get rid of repeats
        return(resultList)
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
                searched: !previousState.searched,
              }
            }
          )
        if(resultList.length === 0){
            this.setState(
                {data: ["No results search again"],
            }

            )
        }
        resultList = []
        categoryList =[]
        timeList = []

    }

    render(){ //displayes new html elements
        //console.log(this.state.lowTime)
        //console.log(this.state.middleTime)
        //console.log(this.state.highTime)
        return(

            <div className="everything">
                <h1>Recipe Search Engine</h1>
                <div className="searching" id="filters">
                    <input type = "text" value = {this.state.inputValue} placeholder = "Search for recipes..." style={{ height:"20px"}, { width:"200px"}, { fontSize: "14px"}} onChange = {this._handleChange}></input>
                    <input type = "radio" value = {this.state.nameSelected} name="categories" id="Name" onClick = {this._handleNameClick} defaultChecked></input>
                        <label htmlFor="Name">Name</label>
                    <input type = "radio" value = {this.state.ingredientSelected} name="categories" id="Ingredient" onClick = {this._handleIngredientClick}></input>
                        <label htmlFor="Ingredient">Ingredient</label>
                    <div id="searchButton">
                        <button onClick={this._handleSearchClick}>Search!</button>
                    </div>
                </div>
                <div className="searching" id="advanced">
                    <button onClick={this._handleAdvancedClick}>Advanced</button>
                </div>
                <div className="container">
                        <Category
                            class={this.state.hidden}
                            option1="appetizer"
                            option2="entree"
                            option3="dessert"
                            state1={this.state.appetizer}
                            state2={this.state.entree}
                            state3={this.state.dessert}
                            click1={this._handleAppetizerClick}
                            click2={this._handleEntreeClick}
                            click3={this._handleDessertClick}
                            searchCategory = "Recipe Category"
                        />
                        <Category 
                            class={this.state.hidden}
                            option1="1-30"
                            option2="31-60"
                            option3="Over an hour"
                            state1={this.state.lowTime}
                            state2={this.state.middleTime}
                            state3={this.state.highTime}
                            click1={this._handleLowTimeClick}
                            click2={this._handleMiddleTimeClick}
                            click3={this._handleHighTimeClick}
                            searchCategory = "Prep Time"
                        />
                </div>
                <div className="resultContainer">
                    {this.state.data}
                </div>
            </div>
           
        );
    }

}


export default Search;


