import React from "react";
import "./Recipe.css"

function Recipe(props){

    return(
        <div className="product">
            <img src={props.productInfo.image}
            alt={props.name}/>
            <h3> {props.productInfo.title} </h3>
            <p> -------------------------- </p>
            <p> Rating: {props.productInfo.rating} / 5 </p>
            <p> Servings: {props.productInfo.servings} </p>
            <p> Calories: {props.productInfo.calories} </p>
        </div>

    )
}

export default Recipe;

