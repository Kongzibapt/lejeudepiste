import React from "react"
import { Link } from "react-router-dom";
import "../../css/Components/button.css"

class Button extends React.Component {

// ---------------------------------- PROPS ----------------------------------
// color : couleur du bouton (vert,rouge,bleu,gris)
// text : texte à afficher
// link : lien vers lequel naviguer
// onClick : fonction à déclencher au click

    constructor(props) {
        super(props)
        this.state={
            color:"",
            activeColor: "",
        }
    }

    componentDidMount(){
        this.applyColor(this.props.color);
    }

    applyColor = (color) => {
        let button = document.getElementsByClassName("buttonBox")[0];
        switch(color) {
            case "green":
                button.className = "buttonBoxGreen";
                break;
            case "red":
                button.className = "buttonBoxRed";
                break;
            case "blue":
                button.className = "buttonBoxBlue";
                break;
            case "gray":
                button.className = "buttonBoxGray";
                break;
            default :
                break;
        }
    }



    render(){
        return(
            <div className="buttonBlock">
                {!this.props.link ? 
                <div className="buttonBox" onClick={!this.props.disabled && this.props.onClick}>
                    <p className="buttonTxt">{this.props.text}</p>
                </div>
                : <Link id="link" to={!this.props.disabled && this.props.link}>
                    <div className="buttonBox" onClick={!this.props.disabled && this.props.onClick}>
                        <p className="buttonTxt">{this.props.text}</p>
                    </div>
                </Link>}
            </div>
        )
    }

}

export default Button