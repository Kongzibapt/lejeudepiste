import React from "react"
import "../../css/Components/choice.css";
import ReactSwipe from 'react-swipe';
import Button from "./Button";


class Choice extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {

    }



    render() {
        return (
            <div className="choice">
                <div className="choiceTitle">
                    <p className="choiceTitleTxt">{this.props.title}</p>
                </div>
                <ReactSwipe className="swipe" swipeOptions={{ continuous: false }}>
                    <div className="choiceContent">
                        <div className="compassImg">
                            <img className="choiceImg" src="../../img/Compass_Static.png" alt="Boussole" />
                        </div>
                        <div className="compassChoiceTitle">
                            <p className="compassChoiceTitleTxt">Avec la boussole...</p>
                        </div>
                        <div className="choiceButton">
                            <Button link={"/direction"+this.props.page} text="C'est parti !" color="green" />
                        </div>
                    </div>
                    <div className="choiceContent">
                        <div className="choiceLocationImg">
                            <img className="choiceImg" src={this.props.src} alt={this.props.title} />
                        </div>
                        <div className="soloChoiceTitle">
                            <p className="soloChoiceTitleTxt">... ou par vos propres moyens !</p>
                        </div>
                        <div className="choiceButton">
                            <Button link="/solo" text="C'est parti !" color="green" />
                        </div>
                    </div>
                </ReactSwipe>

            </div>
        )
    }

}

export default Choice