import React from 'react';
import "../../css/Views/waiting.css"

 class Waiting extends React.Component {


    constructor(props){
        super(props)
        this.state={
            inKey:true,
            onCross:false
        }
    }

    


    componentDidMount(){
        setTimeout(() =>
        this.setState({inKey:true}),5500)
        
    }


    handleMenu = (e) => {
        console.log(e.target);
        let menu = document.getElementById("menu")
        let titleBlock = document.getElementById("titleMenuBlock")
        let title = document.getElementById("titleMenuTxtWait")
        let item = document.getElementById("itemsBlock")
  
        if (e.target.id !== "hamb"){
          e.target = e.target.parentNode;
        }
  
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
            <div id="header">
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
                        <div id="hamb" onClick={this.handleMenu}>
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
                            <input id="emailInput" onChange={this.handleIdentifyerChange} type="text"/>
                        </form>
                    </div>
            </div>
        </div>
      )
    }
  }

  export default Waiting