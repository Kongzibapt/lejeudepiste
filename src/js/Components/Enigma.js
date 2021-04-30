import React from 'react';
import "../../css/Components/enigma.css"
import Footer from './Footer';
import Header from './Header';

 class Enigma extends React.Component {

    constructor(props){
        super(props)
        this.state={

        }
    }

    componentDidMount(){
        this.animateBack()

    }

    animateBack(){
        let head = document.getElementById("header");
        head.className = "animHead"
        let foot = document.getElementById("footer");
        foot.className = "animFoot"   
    }

    render() {
      return (
        <div id="enigma">
        <div id="back"></div>
        <Header/>
        <div id="transpBlockTitle">
            <div id="transpBoxTitle">
                <p id="titleEnigmaTxt">Enigme {this.props.id}</p>
            </div>
        </div>
        <div id="transpBlockEnigma">
                <div id="transpBoxEnigma">
                    <div id="buttonBlock" onClick={this.props.handleCompass}>
                        <div id="greenButton">
                            <p id="buttonTxt">Boussole</p>
                        </div>
                    </div>
                </div>
        </div>
        <div id="littleCharBlock">
            <div id="littleCharBox">

            </div>
            <div id="bulleTriangleBlock">
                <img id="bulleTriangle" src='img\Triangle.png' alt="triangle"/>
            </div>
            <div id="bulleBlock">
                <div id="bulleBox">
                    <p id="bulleTxt">Coucou, moi c’est petit perso ! Je vais t’aider dans cette aventure. Mais tu dois m’aider moi aussi !</p>
                    <div id="bulleTapBlock">
                        <img id="bulleTap" src='img\Lecture.png' alt='tap'/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
      )
    }
  }

  export default Enigma