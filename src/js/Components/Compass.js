import React from 'react';
import "../../css/Components/compass.css"
import Footer from './Footer';
import Header from './Header';

 class Compass extends React.Component {

    constructor(props){
        super(props)
        this.state={
          lat:0,
          long:0,
          direction:0
        }
    }

    componentDidMount(){
      navigator.geolocation.watchPosition((position)=>{
        this.setState({lat:position.coords.latitude,long:position.coords.longitude,direction:position.coords.heading})
        console.log(this.state);
      })
    }


    render() {
      return (
        <div id="compass">
            <Header/>
                <div id="roundBack">
                  <img id="aiguille" src='img\Aiguille.png' alt="aiguille"/>
                  <img id="logoCompass" src='img\Boussole.png' alt="logo"/>
                </div>
                <div id="buttonBlock" onClick={this.props.handleEnigma}>
                    <div id="greenButton">
                        <p id="buttonTxt">Prochaine énigme !</p>
                    </div>
                </div>
                <div id="coord">
                    {this.state.lat} & {this.state.long} & {this.state.direction}
                </div>
            <Footer/>
        </div>
      )
    }
  }

  export default Compass