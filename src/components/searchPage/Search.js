import React, {Component} from "react";
import Text from "./textbox/Text.js";
import recipeData from "../../assests/data/recipe.json"
import Recipe from "../resultPage/Recipe.js"


let results = recipeData.recipes
/*let resultComponent = results.map(result => {
    return(
        <Recipe key={result.name} productInfo={result}/>
      );

})*/

class Search extends Component{

    //constructor
    constructor(props){ 
        super(props);
        this.state = {
            searched: true, /// ummm come back to this
            data: null,
        };
        this._handleClick = this._handleClick.bind(this)
        //all event listeners should be binded in constructors
        //if not binded the event wont be able to recongnize "this"
    }

    // Methods
    _handleClick(){
        this.setState((previousState) => {// thi.setState: a method that takes a function
            return{
                searched: !previousState.searched,
            }
            },
            //this.displaySearch(),
        );
    }

    filterName(){
        if(this.state.nameSelected && this.state.searched){
            const results = this.state.data.filter(x => x.props.productInfo.title.toLowerCase().includes(this.state.inputValue))
            //this.setState({data: results})
            console.log(results)
        }
    }

    //display search is a function that console.logs (test)
    displaySearch = (propTest) =>{
        if(this.state.searched){
            console.log(propTest)
            //console.log(resultComponent[0].props.productInfo.title)
        }
    }

    render(){ //displayes new html elements
        const resultList = this.state.data

        //when rendering {Text} your assinging it a prop - things that get passed down to it
        //giving it the prop on change
        return(
            <div className="searchButton">
                <Text inputProp={this.displaySearch}/> 
                <button onClick={this._handleClick}>Search!</button>
                
                
            </div>

        );
    }

}


export default Search;