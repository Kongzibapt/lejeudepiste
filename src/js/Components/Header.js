import React from 'react';
import "../../css/Components/header.css"
import Menu from './Menu';

 class Header extends React.Component {
    
    constructor(props) {
      super(props)
      this.state={
        onCross:false
      }
    }

    handleMenu = (e) => {

      let menu = document.getElementById("menu")
      let titleBlock = document.getElementById("titleMenuBlock")
      let title = document.getElementById("titleMenuTxt")
      let item = document.getElementById("itemsBlock")
      let contactBlock = document.getElementById("contactBlock")
      let contact = document.getElementById("contactTxt")
      let leave = document.getElementById("leaveBlock")

      if (e.target.id !== "hamb"){
        e.target = e.target.parentNode;
      }

      if (this.state.onCross) {
        e.target.childNodes[0].className = "animationHambUpInv"
        e.target.childNodes[1].className = "animationHambMidInv"
        e.target.childNodes[2].className = "animationHambDownInv"
        this.setState({onCross:false},()=>{
          menu.className = "animMenuInv"
          title.className = "animTitleInv"
          titleBlock.className = "animTitleBlockInv"
          item.className = "animItemsBlockInv"
          for (let i = 0;i<item.childElementCount;i++){
            item.childNodes[i].id = "animItemInv"+i.toString()
          }
          contactBlock.className = "animContactBlockInv"
          contact.className = "animContactInv"
          leave.className = "animLeaveInv"
        })
      } else {
        e.target.childNodes[0].className = "animationHambUp"
        e.target.childNodes[1].className = "animationHambMid"
        e.target.childNodes[2].className = "animationHambDown"
        this.setState({onCross:true},()=>{
          menu.className = "animMenu"
          titleBlock.className = "animTitleBlock"
          title.className = "animTitle"
          item.className = "animItemsBlock"
          for (let i = 0;i<item.childElementCount;i++){
            item.childNodes[i].id = "animItem"+i.toString()
          }
          contactBlock.className = "animContactBlock"
          contact.className = "animContact"
          leave.className = "animLeave"
        })
      }
      
    }



    render() {
      return (
            <div id="header">
             <Menu/>
                <div id="headerBlock">
                    <div id="logoBlock">
                      <img id="logo" src='img\Logo.png' alt="logo"/>
                    </div>
                    <div id="titleBlock">
                      <p id="titleTxt">Le Jeu de Piste</p>
                    </div>
                    <div id="hambBlock">
                      <div id="hamb" onClick={this.handleMenu}>
                        <div id="hambUp"></div>
                        <div id="hambMid"></div>
                        <div id="hambDown"></div>
                      </div>
                    </div>
                </div>
            </div>
      )
    }
  }

  export default Header