import React from 'react';
import "../../css/Views/kiosqueenigma.css"
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Saleugos from '../Components/Saleugos';
import Compass from '../Components/Compass';
import Button from '../Components/Button';
import CasesToFill from '../Components/CasesToFill';
import InventoryTimeBonus from '../Components/InventoryTimeBonus';
import Bonus from '../Components/Bonus';
import Inventory from '../Components/Inventory';
import Choice from '../Components/Choice';
import {start} from '../../features/time/timeSlice';
import { connect } from 'react-redux';
import * as txtSaleugos from '../../utils/txtSaleugos'
import { add } from '../../features/inventory/inventorySlice';

const mapStateToProps = (state) => {
  return {
      time:state.time.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      start : ()=>{dispatch(start())},
      add : (value)=>{dispatch(add(value))}
  }
}

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
          onChoice:false,
          onBonus:false,
          onInventory:false
        }
    }

    launchEnigma = () => {
      this.setState({onEnigma : true,letsgo:false,launchTime:true},()=>{
        setInterval(()=>
        {
            this.props.start();
        },1000)
      })
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


    handleSecret = (result) => {
      // let answerCasesBlock = document.getElementById("answerCasesBlock")
      // let currentLetter = '';
      // let word = ""
      // for (let i = 0 ; i < answerCasesBlock.childElementCount; i++) {
      //   currentLetter = answerCasesBlock.childNodes[i].value.toUpperCase();
      //   if (currentLetter === this.state.secret[i]){
      //     answerCasesBlock.childNodes[i].className = "greenCase"
      //   } else {
      //     answerCasesBlock.childNodes[i].className = "redCase"
      //   }
      //   word += currentLetter;
      // }
      if (result){
        this.setState({notif:true})
      }
    }

    handleNotif = (value) => {
      this.setState({notif:value})
    }

    handleCompass = () => {
      this.setState({onEnigma:false,onCompass:true},()=>{
        let compass = document.getElementsByClassName("compass")[0];
        compass.id = "goToInventory";
      });
    }

    rangeInventory = () => {
      this.props.add("compass");
      let compass = document.getElementsByClassName("compass")[0];
      compass.style.cssText = "animation:goToInventory ease-out 2.5s both;";
      let logoCompass = document.getElementsByClassName("logoCompass")[0];
      logoCompass.id = "resizeLogo";
      let aiguille = document.getElementsByClassName("aiguille")[0];
      aiguille.id = "resizeAiguille";
      let buttonBlock = document.getElementsByClassName("buttonBlock")[0];
      buttonBlock.style.cssText = "opacity:0";
      setTimeout(() =>{
        this.setState({onChoice:true,onCompass:false})
      },3000)
    }

    handleInventory = () => {
      this.setState({onInventory:!this.state.onInventory});
      if (this.state.onBonus){
        this.setState({onBonus:!this.state.onBonus});
      }
    }
  
    handleBonus = () => {
      this.setState({onBonus:!this.state.onBonus},()=>console.log(this.state));
      if (this.state.onInventory){
        this.setState({onInventory:!this.state.onInventory});
      }
    }


    render() {
      const txt = txtSaleugos.txtKiosque;
      return (
        <div className="home">
          <Header title="L'ingrédient secret" dark_theme={true} menuItems={["Sécurité","Paramètres","Statistiques","Contact"]} no_escape={true}/>
          <InventoryTimeBonus handleInventory={this.handleInventory} handleBonus={this.handleBonus}/>
          {!this.state.onInventory && !this.state.onBonus &&
            <div className="transpBlock">
              <div className="transpBox">
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
                  <CasesToFill code="BOUSSOLE" nbCases={8} title="La réponse est..." returnResult={this.handleSecret}/>
                </div>
              </>
              : this.state.letsgo ?
              <Button text="C'est parti !" color="green" onClick={this.launchEnigma}/>
              : this.state.onCompass ?
              <div className="compassToInventoryContainer">
                <Compass/>
                <Button text="Ranger" color="green" onClick={this.rangeInventory}/>
              </div>
              : this.state.onChoice ?
              <Choice title="Musée Soulages" src="img/Soulages.png" page='/museum'/>
              : null}
              </div>
            </div>}
            {this.state.onBonus && !this.state.onInventory &&
                <Bonus/> 
              }
              {!this.state.onBonus && this.state.onInventory &&
                <Inventory/>
              }
            {this.state.notif && <Saleugos notif={this.state.notif} txt={txt} onClickFirst={this.handleCompass}/>}
            {!this.state.notif && <Saleugos notif={this.state.notif}/>}
          <Footer/>
        </div>
        
      )
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)(KiosqueEnigma)