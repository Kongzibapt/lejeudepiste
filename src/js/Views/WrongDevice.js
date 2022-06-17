import React from 'react';
import "../../css/Views/wrongDevice.css"
import Footer from '../Components/Footer';

 class WrongDevice extends React.Component {

    constructor(props){
        super(props)
        this.state={
        }
    }

    componentDidMount(){
      }

    render() {
      return (
        <div className="wrongDevice">
            <div className="wrongDeviceTransp">
                <div className="wrongAdvice">
                    <img className="wrongAdviceImg" src="img/MenuItems/Sécurité.png" alt="Attention"/>
                    <p className="wrongAdviceTxt">Nous te conseillons vivement de jouer sur tablette ou mobile !</p>
                </div>
                <Footer/>
            </div>
        </div>
      )
    }
  }

  export default WrongDevice