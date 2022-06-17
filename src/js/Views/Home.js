import React from 'react';
import "../../css/Views/home.css"
import Button from '../Components/Button';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

 class Home extends React.Component {

    constructor(props){
        super(props)
        this.state={
        }
    }

    componentDidMount(){
      }
    
// Dans package.json :
// "homepage": "https://kongzibapt.github.io/LeJeudePiste.github.io/",
// ou 
// "homepage": "http://localhost/",

    render() {
      return (
        <div className="home">
            <Header title="L'ingrédient secret" dark_theme={true} menuItems={["Sécurité","Paramètres","Statistiques","Contact"]} no_escape={true}/>
            <div className="transpBlock">
                <div className="transpBox">
                <svg id="cathé" width="2205" height="1165" viewBox="0 0 2205 1165" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="cathéStroke" d="M0.5 988H149V866L137.5 853H158L160.5 689.5L140.5 669H170V615L205.5 599L281.5 529.5L364.5 610L389.5 620V650L403 624.5V592L406 573L412.5 588L423.5 584L429 550.5L434.5 584L444 588L447.5 573L451.5 592L458 594.5V610H484L486.5 592L490 610H735.5L742 592L948 597.5H997V577L1006.5 564.5L1016 479.5L1026.5 564.5L1033.5 570V589.5L1442.5 581.5L1520 729.5V716.5V442.5L1513 435.5V385.5H1533V288.5H1525L1520 283.5L1526.5 277H1533V253.5L1539.5 247V173H1548V138L1558 128L1568 138V178H1579.5V156.5L1591 145H1641.5V92.5H1648V71.5H1661V11L1668 4L1675 11V71.5H1686.5V92.5H1691.5V145H1745L1756.5 153.5V181H1767.5V146.5L1777 135L1786 145V181H1791.5V266.5H1798V281H1806.5L1809.5 285.5L1806.5 290.5H1798V385.5H1810.5V435.5L1802.5 442.5V669.5H1807V1162.5H2205" stroke="white" strokeWidth="5"/>
                </svg>
                <svg  id="rodez" width="517" height="111" viewBox="0 0 517 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="rodezStroke" d="M10.5 104.499C10.5 100.499 24 12.002 24 12.002C36.5 10.3353 59.5 10.5015 63.5 13.5019C67.9719 16.8563 75 27.5019 69.5 38.5019C65.1 47.3019 41.3333 56.1655 35 58.9989C38.1667 71.6656 69.5 90.999 69.5 104.499M385.5 85.999C393 107.999 349.5 97.499 336 97.499C336.812 89.1952 337.5 69.999 339 53.9987M339 53.9987C340.312 39.999 340.5 28.499 341.5 13.9987C370.5 13.9987 370 18.002 390 18.002M339 53.9987C367 53.9987 359 53.9987 370 53.9987M501 82.999C501 97.499 481.5 96.999 468 96.999C454.5 96.999 440 96.999 436 88.499L501 18.002C495 13.9987 433.5 3.49902 433.5 26.499M153.5 11.4992C172.5 11.4992 183.673 28.499 179.5 53.9987C175 81.4984 164.5 97.499 141.5 97.499C124 97.499 112.5 81.999 117 50.499C121.182 21.222 134.5 11.4992 153.5 11.4992ZM290 69.999C293.408 54.8535 290.867 42.1188 288 35.502C281.5 20.499 269 16.4987 257.5 13.9987L232 11.4992L228 97.499H252.5C261.333 96.6657 285.5 89.999 290 69.999Z" stroke="white" stroke-width="20"/>
                </svg>
                </div>
            </div>
            <Button text="Commencer" color="blue" link="/equip"/>
            
            <Footer/>
        </div>
      )
    }
  }

  export default Home