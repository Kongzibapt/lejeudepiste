import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/Components/menu.css"

 class Menu extends React.Component {

    constructor(props){
        super(props)
        this.state={
            
        }
    }

    


    render() {
        const items = [];
        const srcs = [];
        for (let i = 0; i < this.props.items.length;i++){
            srcs.push("img/"+this.props.items[i]+".png");
            items.push(
                <div className="itemBlock">
                    <div className="itemTxtBlock">
                        <p className="itemTxt">{this.props.items[i]}</p>
                    </div>
                    <div className="itemImgBlock">
                        <img className="itemImg" src={srcs[i]} alt="sécurité"/>
                    </div>
                </div>
            )
        }
      return (
        <div id="menu">
            <div id="titleMenuBlock">
                <div id="titleMenuTxtBlock">
                    <p id="titleMenuTxt">Menu</p>
                </div>
                <div id="crossBlock">
                </div>
            </div>
            <div id="itemsBlock">
                {items}
            </div>
            {this.props.quit_button &&
            <div id="leaveBlock">
                <Link id="link" to="/">
                    <div id="redButton">
                        <p id="buttonTxt">Quitter la partie</p>
                    </div>
                </Link>
            </div>
            }   
        </div>
      )
    }
  }

  export default Menu