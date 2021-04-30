import React from 'react';
import "../../css/Views/enigmas.css"
import Compass from '../Components/Compass';
import Enigma from '../Components/Enigma';

 class Enigmas extends React.Component {

    constructor(props){
        super(props)
        this.state={
          onCompass:false,
          id:0,
        }
    }

    handleCompass = () => {
      this.setState({onCompass:true})
    }

    handleEnigma = () => {
      this.setState({onCompass:false,id:this.state.id+1})
    }


    render() {
      return (
        this.state.onCompass ? 
        <Compass handleEnigma = {this.handleEnigma}/>
        :
        <Enigma id={this.state.id} handleCompass={this.handleCompass}/>
      )
    }
  }

  export default Enigmas