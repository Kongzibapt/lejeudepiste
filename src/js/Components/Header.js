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
      let leave = document.getElementById("leaveBlock")

      if (e.target.id !== "hamb"){
        e.target = e.target.parentNode;
      }

      if (this.state.onCross) {
        e.target.childNodes[0].className = this.props.dark_theme ? "animationDarkHambUpInv" : "animationLightHambUpInv";
        e.target.childNodes[1].className = this.props.dark_theme ? "animationDarkHambMidInv" : "animationLightHambMidInv";
        e.target.childNodes[2].className = "animationHambDownInv"
        this.setState({onCross:false},()=>{
          menu.className = "animMenuInv"
          title.className = "animTitleInv"
          titleBlock.className = "animTitleBlockInv"
          item.className = "animItemsBlockInv"
          for (let i = 0;i<item.childElementCount;i++){
            item.childNodes[i].id = "animItemInv"+i.toString()
          }
          
          !this.props.no_escape && (leave.className = "animLeaveInv")
        })
      } else {
        e.target.childNodes[0].className = this.props.dark_theme ? "animationDarkHambUp" : "animationLightHambUp"; 
        e.target.childNodes[1].className = this.props.dark_theme ? "animationDarkHambMid" : "animationLightHambMid";
        e.target.childNodes[2].className = "animationHambDown"
        this.setState({onCross:true},()=>{
          menu.className = "animMenu"
          titleBlock.className = "animTitleBlock"
          title.className = "animTitle"
          item.className = "animItemsBlock"
          for (let i = 0;i<item.childElementCount;i++){
            item.childNodes[i].id = "animItem"+i.toString()
          }
          
          !this.props.no_escape && (leave.className = "animLeave")
        })
      }
      
    }



    render() {
      return (
            <div id="header">
             <Menu items={this.props.menuItems} quit_button = {!this.props.no_escape}/>
                <div id="headerBlock">
                    <div id="logoBlock">
                      <img id="logo" src='img\Logo.png' alt="logo"/>
                    </div>
                    <div id="titleBlock">
                      <p id={this.props.dark_theme ? "darkTitleTxt" : "lightTitleTxt"}>{this.props.title}</p>
                    </div>
                    <div id="hambBlock">
                      <div id="hamb" onClick={this.handleMenu}>
                        <div id={this.props.dark_theme ? "darkHambUp" : "lightHambUp"}></div>
                        <div id={this.props.dark_theme ? "darkHambMid" : "lightHambMid"}></div>
                        <div id={this.props.dark_theme ? "darkHambDown" : "lightHambDown"}></div>
                      </div>
                    </div>
                </div>
            </div>
      )
    }
  }

  export default Header