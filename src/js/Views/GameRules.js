import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/Views/gamerules.css"
import Footer from '../Components/Footer';
import Header from '../Components/Header';

 class GameRules extends React.Component {

    constructor(props){
        super(props)
        this.state={
        }
    }

    render() {
      return (
        <div id="home">
            <Header/>
            <div id="transpBlock">
                <div id="transpBox">
                    <div id="rulesTitleBlock">
                        <p id="rulesTitleTxt">Déroulement du jeu</p>
                    </div>
                    <div id="rulesContentBlock">
                        <div id="rulesContentBox">

                        </div>
                    </div>
                </div>
            </div>
            <div id="buttonBlock">
                <Link id="link" to="/enigmas">
                    <div id="greenButton">
                        <p id="buttonTxt">C'est parti</p>
                    </div>
                </Link>
            </div>
            <Footer/>
        </div>
      )
    }
  }

  export default GameRules