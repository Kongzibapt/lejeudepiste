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
                <p className={this.props.dark_theme ? "inputDarkTitle" : "inputLightTitle"}>{this.props.title}Bonjour</p>
                <form className="formInput" method='POST' onSubmit={this.props.submit}>
                    <input className="inputTxt" onChange={this.props.change} type="text"/>
                </form>
                <p className="errorTxt">{this.props.errors}Bonjour</p>
            </div>
        )
    }

}

export default Input