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
                <div className="itemBlock">
                    <div className="itemTxtBlock">
                        <p className="itemTxt">Sécurité</p>
                    </div>
                    <div className="itemImgBlock">
                            <img className="itemImg" src="img\Security.png" alt="sécurité"/>
                    </div>
                </div>
                <div className="itemBlock">
                    <div className="itemTxtBlock">
                        <p className="itemTxt">Statistiques</p>
                    </div>
                    <div className="itemImgBlock">
                            <img className="itemImg" src="img\Statistics.png" alt="stats"/>
                    </div>
                </div>
                <div className="itemBlock">
                    <div className="itemTxtBlock">
                        <p className="itemTxt">Paramètres</p>
                    </div>
                    <div className="itemImgBlock">
                            <img className="itemImg" src="img\Settings.png" alt="params"/>
                    </div>
                </div>
            </div>
            <div id="contactBlock">
                <p id="contactTxt">Contact</p>
            </div>
            <div id="leaveBlock">
                <Link id="link" to="/">
                    <div id="redButton">
                        <p id="buttonTxt">Quitter la partie</p>
                    </div>
                </Link>
            </div>
        </div>
      )
    }
  }

  export default Menu