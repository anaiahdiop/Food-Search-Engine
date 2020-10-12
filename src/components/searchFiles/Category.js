import React, {Component} from "react"; // so react can translate all jsx into js

class Category extends Component{

    constructor(props){
        super(props);
    }

    
     render(){
         return(
             <div className={this.props.class}>
                <input type="checkbox" id={this.props.option1} name={this.props.option1} value={this.props.state1} onClick={this.props.click1}></input>
                    <label htmlFor={this.props.option1}>{this.props.option1}</label>

                <input type="checkbox" id={this.props.option2} name={this.props.option2} value={this.props.state2}  onClick={this.props.click2}></input>
                    <label htmlFor={this.props.option2}>{this.props.option2}</label>

                <input type="checkbox" id={this.props.option3} name={this.props.option3} value={this.props.state3}  onClick={this.props.click3}></input>
                    <label htmlFor={this.props.option3}>{this.props.option3}</label>
             </div>


        


         );
     }
}

export default Category