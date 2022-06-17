import axios from 'axios';
import React from 'react';
import adress from '../../utils/adress';
import "../../css/Views/waiting.css"
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Input from '../Components/Input';

 class Waiting extends React.Component {


    constructor(props){
        super(props)
        this.state={
            inKey:false,
            onCross:false,
            email:'',
            errors:'',
            validated:false
        }
    }

    componentDidMount(){
      setTimeout(() => {
      this.setState({inKey:true});
    }
      ,5500);
      
      this.handleInputAnim();
  }

    handleEmailChange = e => {
      this.setState({email:e.target.value,errors:''});
    }

    animForm = () => {
      let inputBlock = document.getElementsByClassName("inputBlock")[0];
      inputBlock.id = "animNewsletterBlock"

    }

    handleSubmit = event => {
      event.preventDefault();

      let bodyFormData = new FormData();
      bodyFormData.set('email',this.state.email);
      axios.post(adress+'emails',bodyFormData)
        .then(res => {
          this.setState({validated:true})
          this.animForm();
        })
        .catch(error => {
          // this.setState({errors:error.response.data.errors.email})
        })
    }

  handleInputAnim = () => {
    var inputTxt = document.getElementsByClassName("inputDarkTitle")[0];
    var input = document.getElementsByClassName("formInput")[0];
    inputTxt.style.cssText = "animation: fadeIn 2s 13s both";
    input.style.cssText = "animation: fadeIn 1s 13.5s both";
  }


    render() {
      return (
        <div className="waiting">
            {this.state.inKey && 
            <>
            <Header title="" dark_theme={true} menuItems={["Contact"]} no_escape={true}/>
            <Footer dark_theme={true}/>
            </>}
            <div id="titleWaitingBlock">
                <p id="titleWaitingUp">Les Cités</p>
                <p id="titleWaitingDown">des Secrets</p>
            </div>
            <div className="keyBlock">
                <img className="key" src='img\Key.svg' alt="clé"/>
            </div>
            {!this.state.inKey && 
            <div id="footerBlockBigWait">
                <div id="footerBlockWait">
                        <p className="footerTxt">Tous droits réservés</p>
                        <p className="footerTxt">Baptiste MARTY & David ANDREAN</p>
                        <p className="footerTxt">Copyright @</p>
                </div>
            </div>}
            <div id="yellowBack">
                    <div id="holdTxtBlock">
                        <p id="holdTxt">Le nouveau jeu de piste des Cités des Secrets arrive bientôt, tenez vous prêts !</p>
                    </div>
                    <Input change={this.handleEmailChange} dark_theme={true} size="25" title="Rentre ton mail c'est gratuit !" errors={this.state.errors} submit={this.handleSubmit}/>
                    {this.state.validated &&
                    <div id="validationBlock">
                      <svg id="validateSvg" width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d)">
                          <path d="M30 44L45.3308 64.6008C45.6874 65.0799 46.3818 65.1417 46.8174 64.7329L78.5 35M100 50C100 75.4051 79.4051 96 54 96C28.5949 96 8 75.4051 8 50C8 24.5949 28.5949 4 54 4C79.4051 4 100 24.5949 100 50Z" stroke="black" strokeWidth="8"/>
                        </g>
                        <defs>
                          <filter id="filter0_d" x="0" y="0" width="108" height="108" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                          <feOffset dy="4"/>
                          <feGaussianBlur stdDeviation="2"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                          </filter>
                        </defs>
                      </svg>
                      <div id="validateTxtBlock">
                        <p id="validateTxt">Parfait !</p>
                      </div>
                    </div>}
            </div>
        </div>
      )
    }
  }

  export default Waiting