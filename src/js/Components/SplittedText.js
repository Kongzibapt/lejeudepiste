import React from "react"
import "../../css/Components/splittedText.css";


class SplittedText extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            current_text:this.props.tabtxt[0].txt
        }
    }

    componentDidMount(){
        var texts = document.getElementsByClassName("splittedTxt");
        var sum = 0;
        for (let i = 0; i <this.props.tabtxt.length; i++) {
            if (this.props.tabtxt[i].sec === -1){
                texts[i].style.cssText = "animation : fadeTxtForAllways 2s "+sum+"s both" ;
            }else{
                texts[i].style.cssText = "animation : fadeTxt "+this.props.tabtxt[i].sec+"s "+sum+"s both" ;
                sum += this.props.tabtxt[i].sec;
            }
        }
    }


    launchText = () => {
        for (let i = 0; i <this.props.tabtxt.length; i++) {
            setTimeout(() => {
                this.setState({current_text:this.props.tabtxt[i].txt});
            },this.props.tabtxt[i].sec*1000);
        }

    }


    render(){
        const texts = [];
        for (let i = 0; i <this.props.tabtxt.length; i++) {
           texts.push(
            <p key={i} className="splittedTxt">{this.props.tabtxt[i].txt}</p>
           )
           
        }
        return(
            <div className="splittedText">
                {texts}
            </div>
        )
    }

}

export default SplittedText