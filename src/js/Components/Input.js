import React from "react"
import "../../css/Components/input.css"

class Input extends React.Component {

    constructor(props) {
        super(props)
        this.state={
        }
    }



    render(){
        return(
            <div className="inputBlock">
                <p style={this.props.size && {"font-size":this.props.size+"px"}} className={this.props.dark_theme ? "inputDarkTitle" : "inputLightTitle"}>{this.props.title}</p>
                <form className="formInput">
                    <input className="inputTxt" onChange={this.props.change} type="text"/>
                </form>
                <p className="errorTxt">{this.props.errors}</p>
            </div>
        )
    }

}

export default Input