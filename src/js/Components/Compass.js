import React from 'react';
import "../../css/Components/compass.css"

 class Compass extends React.Component {

    constructor(props){
        super(props)
        this.state={
          lat:0,
          long:0,
          direction:0,
          oldDirection:0,
          orientation:0
        }
    }

    componentDclassNameMount(){
      navigator.geolocation.watchPosition((position)=>{
        this.setState({oldDirection:this.state.direction})
        if (position.coords.heading == null){
          this.setState({direction:0})
        } else {
          this.setState({direction:position.coords.heading})
        }
        this.setState({lat:position.coords.latitude,long:position.coords.longitude});
        console.log(this.state);

      })
      window.addEventListener("deviceorientation",(e)=>{
        this.setState({orientation:360-e.alpha})
      })
    }



    render() {
      return (
        <div className="compass">
          <div className="compassTitle">
              <p className="compassTitleTxt">Boussole</p>
          </div>
          <div className="roundBack">
            <img style={{transform:"rotate("+this.state.orientation + "deg)"}} className="aiguille" src='img\Aiguille.png' alt="aiguille"/>
            <img className="logoCompass" src='img\Boussole.png' alt="logo"/>
          </div>
          {/*  <div className="coord">
              {this.state.lat} & {this.state.long} & {this.state.direction}
          </div>
          <div className="coord">
            {this.state.orientation}
          </div>  */}
        </div>
      )
    }
  }

  export default Compass