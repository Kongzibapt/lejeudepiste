import axios from 'axios';
import React from 'react';
import adress from '../../adress';
import "../../css/Views/waiting.css"

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
      setTimeout(() =>
      this.setState({inKey:true}),5500)
      
  }

    handleEmailChange = e => {
      this.setState({email:e.target.value,errors:''});
    }

    animForm = () => {
      let newsletter = document.getElementById("newsletterBlock")
      newsletter.className = "animNewsletterBlock"

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
          this.setState({errors:error.response.data.errors.email})
        })
    }


 


    handleMenu = (e) => {
        console.log(e.target);
        let menu = document.getElementById("menu")
        let titleBlock = document.getElementById("titleMenuBlock")
        let title = document.getElementById("titleMenuTxtWait")
        let item = document.getElementById("itemsBlock")
  
        if (e.target.id !== "hambWait"){
          e.target = e.target.parentNode;
        }

        console.log(e.target);
  
        if (this.state.onCross) {
            
          e.target.childNodes[0].className = "animationHambUpInvWait"
          e.target.childNodes[1].className = "animationHambMidInvWait"
          e.target.childNodes[2].className = "animationHambDownInvWait"
          this.setState({onCross:false},()=>{
            menu.className = "animMenuInv"
            title.className = "animTitleInv"
            titleBlock.className = "animTitleBlockInv"
            item.className = "animItemsBlockInv"
            for (let i = 0;i<item.childElementCount;i++){
              item.childNodes[i].id = "animItemInv"+i.toString()
            }
          })
        } else {
          e.target.childNodes[0].className = "animationHambUpWait"
          e.target.childNodes[1].className = "animationHambMidWait"
          e.target.childNodes[2].className = "animationHambDownWait"
          this.setState({onCross:true},()=>{
            menu.className = "animMenu"
            titleBlock.className = "animTitleBlock"
            title.className = "animTitle"
            item.className = "animItemsBlock"
            for (let i = 0;i<item.childElementCount;i++){
              item.childNodes[i].id = "animItem"+i.toString()
            }
          })
        }
        
      }



    render() {
      return (
        <div id="waiting">
            {this.state.inKey && 
            <>
            <div id="headerWait">
                <div id="menu">
                    <div id="titleMenuBlock">
                        <div id="titleMenuTxtBlock">
                            <p id="titleMenuTxtWait">Menu</p>
                        </div>
                        <div id="crossBlock">
                        </div>
                    </div>
                    <div id="itemsBlock">
                        <div className="itemBlock">
                            <div className="itemTxtBlock">
                                <p className="itemTxt">Contact</p>
                            </div>
                            <div className="itemImgBlock">
                                    <img className="itemImg" src="img\Contact.png" alt="sécurité"/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                    <div id="headerBlock">
                        <div id="logoBlockWait">
                        <img id="logo" src='img\Logo.png' alt="logo"/>
                        </div>
                        <div id="titleBlockWait">
                        <p id="titleTxt">L'Ingrédient Secret</p>
                        </div>
                        <div id="hambBlock">
                        <div id="hambWait" onClick={this.handleMenu}>
                            <div id="hambUpWait"></div>
                            <div id="hambMidWait"></div>
                            <div id="hambDownWait"></div>
                        </div>
                        </div>
                    </div>
                </div>
                <div id="footerBlockIn">
                <div id="footerBlockWaitIn">
                        <p className="footerTxtWaitIn">Tous droits réservés</p>
                        <p className="footerTxtWaitIn">Baptiste MARTY & David ANDREAN</p>
                        <p className="footerTxtWaitIn">Copyright @</p>
                </div>
                </div>
            </>}
            <div id="titleWaitingBlock">
                <p id="titleWaitingUp">Les Cités</p>
                <p id="titleWaitingDown">des Secrets</p>
            </div>
            <div id="keyBlock">
                <img id="key" src='img\Key.svg' alt="clé"/>
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
                    <div id="newsletterBlock">
                        <p id="newsletter">Entrez votre e-mail pour être au courant des news !</p>
                        <form method='POST' onSubmit={this.handleSubmit}>
                            <input id="emailInput" onChange={this.handleEmailChange} type="text"/>
                        </form>
                          <p id="errorWaitTxt">{this.state.errors}</p>
                    </div>
                      
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