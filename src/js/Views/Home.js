import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/Views/home.css"
import Footer from '../Components/Footer';
import Header from '../Components/Header';

 class Home extends React.Component {

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
                <svg id="cathé" width="2205" height="1165" viewBox="0 0 2205 1165" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="cathéStroke" d="M0.5 988H149V866L137.5 853H158L160.5 689.5L140.5 669H170V615L205.5 599L281.5 529.5L364.5 610L389.5 620V650L403 624.5V592L406 573L412.5 588L423.5 584L429 550.5L434.5 584L444 588L447.5 573L451.5 592L458 594.5V610H484L486.5 592L490 610H735.5L742 592L948 597.5H997V577L1006.5 564.5L1016 479.5L1026.5 564.5L1033.5 570V589.5L1442.5 581.5L1520 729.5V716.5V442.5L1513 435.5V385.5H1533V288.5H1525L1520 283.5L1526.5 277H1533V253.5L1539.5 247V173H1548V138L1558 128L1568 138V178H1579.5V156.5L1591 145H1641.5V92.5H1648V71.5H1661V11L1668 4L1675 11V71.5H1686.5V92.5H1691.5V145H1745L1756.5 153.5V181H1767.5V146.5L1777 135L1786 145V181H1791.5V266.5H1798V281H1806.5L1809.5 285.5L1806.5 290.5H1798V385.5H1810.5V435.5L1802.5 442.5V669.5H1807V1162.5H2205" stroke="white" stroke-width="5"/>
                </svg>
                <svg id="rodez" width="517" height="111" viewBox="0 0 517 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="rodezStroke" d="M10.5 101L24 12.003C36.5 10.3363 59.5 10.5025 63.5 13.5029C67.9719 16.8573 75 27.5028 69.5 38.5028C65.1 47.3028 41.3333 56.1665 35 58.9998C38.1667 71.6666 64.5 94.5062 73 94.503M389 92.9997C383.8 98.1997 345.167 95.833 335 92.9997C335.812 84.6958 337.593 69.9593 340.198 53.9997M340.198 53.9997C342.403 40.4894 345.199 26.1026 348.5 13.9997C377.3 15.9997 389 11.503 394 18.003M340.198 53.9997C367.64 53.1997 366 55.4998 377 55.4998M503 86.5C496 98 443.5 98.5 436 88.5L501 18.003C493 13.3363 452.5 11.8 430.5 23M155 13.0003C174.039 13.0024 186.448 22.2049 181 55.4998C176.5 82.9995 170.991 106.582 143 99.0002C119 92.4998 119.5 83.4998 124 51.9998C128.182 22.7228 135.961 12.9983 155 13.0003ZM290 70C293.408 54.8545 292 41.503 288 35.503C284 29.503 279.5 20.503 268 18.003L237.5 12.003L227.5 98.0028L252.5 96.503C261.333 95.6696 285.5 90 290 70Z" stroke="white" stroke-width="20"/>
                </svg>
                </div>
            </div>
            <div id="buttonBlock">
              <Link id="link" to="/equip">
                  <div id="blueButton">
                      <p id="buttonTxt">Commencer</p>
                  </div>
              </Link>
            </div>
            <Footer/>
        </div>
      )
    }
  }

  export default Home