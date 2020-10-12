import React, {Component} from 'react';
import './App.css';
import Category from './components/searchFiles/Category';
import Search from "./components/searchFiles/Search.js";
import Style from "./components/recipeFiles/Recipe.css"



//const recipes = data.recipes; //make var holding the dataset array

//make tags as props

//const categoryComponent = recipes.map(recipe => {
  //return (
    //<Category key={recipe.title} recipe={recipe}/>
  //)
//})


class App extends Component{ //Fuctional Componenet

  render(){
    return(
      <div className="App">
        <div><h1>Food Search Engine</h1></div>
        <Search/>

      </div>
    );
  }
}


export default App;