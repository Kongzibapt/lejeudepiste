import React from 'react';
import { Link } from 'react-router-dom';
import "../../css/Views/equipname.css"
import Footer from '../Components/Footer';
import Header from '../Components/Header';

 class EquipName extends React.Component {

    constructor(props){
        super(props)
        this.state={
        }
    }

    handleSubmit = () => {

    }


    render() {
      return (
        <div id="home">
            <Header/>
            <div id="transpBlock">
                <div id="transpBox">
                    <div id="equipNameBlock">
                        <p id="equipNameTxt">Entrez votre nom d'équipe</p>
                    </div>
                    <div id="equipNameInputBlock">
                        <form method='POST' onSubmit={this.handleSubmit}>
                            <input id="equipNameInput" onChange={this.handleIdentifyerChange} type="text"/>
                        </form>
                    </div>
                </div>
            </div>
            <div id="buttonBlock">
                <Link id="link" to="/secu">
                    <div id="greenButton">
                        <p id="buttonTxt">Suivant</p>
                    </div>
                </Link>
            </div>
            <Footer/>
        </div>
      )
    }
  }

  export default EquipName