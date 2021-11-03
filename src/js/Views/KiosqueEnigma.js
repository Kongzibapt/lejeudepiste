import React from 'react';
import "../../css/Views/kiosqueenigma.css"
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Saleugos from '../Components/Saleugos';
import Compass from '../Components/Compass';
import { Link } from 'react-router-dom';

 class KiosqueEnigma extends React.Component {

    constructor(props){
        super(props)
        this.state={
          onEnigma:false,
          letsgo:true,
          response:"",
          secret:"BOUSSOLE",
          notif:false,
          onNotif:false,
          onCompass:false,
          onChoice:false
        }
    }

    launchEnigma = () => {
      let letsGoBlock = document.getElementById("letsGoBlock")
      letsGoBlock.className = "animLetsGoInv"
      this.setState({onEnigma : true,letsgo:false,launchTime:true})
    }


    handleKeyUp = (e) => {
      if (e.key === "Backspace"){
        e.target.previousSibling != null && e.target.previousSibling.focus()
      } else if (e.target.value !== "") {
        if  (e.target.nextSibling != null){
          e.target.nextSibling.focus()
          e.target.nextSibling.value = e.key
        }
      }
      if (e.key === "Enter"){
        this.handleSubmit()
      }
    }

    handleChange = (e) => {
      
      if (e.target.value !== ""){
        e.target.nextSibling != null && e.target.nextSibling.focus()
      }
    }


    handleSubmit = () => {
      let answerCasesBlock = document.getElementById("answerCasesBlock")
      let currentLetter = '';
      let word = ""
      for (let i = 0 ; i < answerCasesBlock.childElementCount; i++) {
        currentLetter = answerCasesBlock.childNodes[i].value.toUpperCase();
        if (currentLetter === this.state.secret[i]){
          answerCasesBlock.childNodes[i].className = "greenCase"
        } else {
          answerCasesBlock.childNodes[i].className = "redCase"
        }
        word += currentLetter;
      }
      if (word === this.state.secret){
        this.setState({notif:true})
      }
    }

    handleNotif = (value) => {
      this.setState({notif:value})
    }

    handleCompass = () => {
      this.setState({onEnigma:false,onCompass:true})
      setTimeout(() =>{
        this.setState({onChoice:true,onCompass:false})
      },3000)
    }


    render() {
      const txt = ["Vous avez gagné une boussole ! je la range dans l'inventaire elle nous sera utile !",
                  "Vous pouvez la ranger dans votre sac !",
                  "Maintenant  dirigez vous vers le musée Soulages,",
                  "ne vous arrêtez pas aux jeux pour enfants,",
                  "vous n'avez pas le temps pour ça, en plus vous êtes trop vieux.",
                  "Suivez toujours la flèche rouge de la boussole,",
                  "elle vous ammènera à la clé de l'énigme.",
                  "Vous pouvez aussi choisir de vous débrouiller tout seul, comme des grands,",
                  "ça vous fera gagner du temps !"
    ]
      return (
        <div id="kiosqueenigma">
          <Header/>
            <div id="kiosqueEnigmaBlock">
              {this.state.onEnigma ?
              <>
                <div id="enigmaTitleBlock">
                  <p id="enigmaTitleTxt">L'énigme de l'aventurier</p>
                </div>
                <div id="enigmaListBlock">
                  <p id="enigmaItem1">Mon premier est un mélange d’eau et de terre</p>
                  <p id="enigmaItem2">Mon second est un poisson de mer à la chair excellente</p>
                  <p id="enigmaItem3">Mon tout vous sera indispensable pour cette aventure</p>
                </div>
                <div id="answerBlock">
                  <div id="answerTitleBlock">
                    <p id="answerTitleTxt">Votre réponse</p>
                  </div>
                  <form id="answerCasesBlock" method="post">
                    <input className="case" type="text" maxLength={1} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
                    <input className="case" type="text" maxLength={1} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
                    <input className="case" type="text" maxLength={1} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
                    <input className="case" type="text" maxLength={1} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
                    <input className="case" type="text" maxLength={1} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
                    <input className="case" type="text" maxLength={1} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
                    <input className="case" type="text" maxLength={1} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
                    <input className="case" type="text" maxLength={1} onChange={this.handleChange} onKeyUp={this.handleKeyUp}/>
                  </form>
                  <div id="answerConfirmBlock">
                    <div id="answerConfirmBox" onClick={this.handleSubmit}>
                      <p id="answerConfirmTxt">Confirmer</p>
                    </div>
                  </div>
                </div>
              </>
              : this.state.letsgo ?
              <div id="letsGoBlock" className="animLetsGo" onClick={this.launchEnigma}>
                <p id="letsGoTxt">C'est parti !</p>
              </div> 
              : this.state.onCompass ?
              <div id="compassBlock">
                <Compass/>
              </div>
              : this.state.onChoice ?
              <>
                <div id="choiceTitleBlock">
                  <p id="choiceTitleTxt">Musée Soulages</p>
                </div>
                <div id="choiceBlock">
                  <div id="compassChoiceBlock">
                    <img id="compassChoiceImg" src="img/Boussole&Aiguille.png" alt="boussole"/>
                    <Link to="/direction" id="compassChoiceTxt">Boussole</Link>
                  </div>
                  <div id="soloChoiceBlock">
                    <img id="soloChoiceImg" src="img/Soulages.png" alt="soulages"/>
                    <div id="soloChoiceTxt">Solo</div>
                  </div>
                </div>
              </>
              : null }
            </div>
            {this.state.notif && <Saleugos notif={this.state.notif} txt={txt} changeNotif={this.handleNotif} compass={this.handleCompass}/>}
            {!this.state.notif && <Saleugos/>}
          <Footer/>
        </div>
        
      )
    }
  }

  export default KiosqueEnigma