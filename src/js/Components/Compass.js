import React from 'react';
import "../../css/Components/compass.css"

class Compass extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lat: 0,
      long: 0,
      direction: 0,
      oldDirection: 0,
      orientation: 0,
      point:{
        lat:43.57326580080532,
        long:1.4684072854560282
      }
    }
  }

  componentDidMount() {
    this.handleCompass(this.state.point);
    if (this.props.size === "tiny"){
      var logo = document.getElementsByClassName("logoCompass")[0];
      var roundBack = document.getElementsByClassName("roundBack")[0];
      logo.style.cssText += "height:140px;width:140px";
      roundBack.style.cssText += "height:150px;width:150px";
    }
  }


  handleCompass = (point) => {
    let pointDegree;

    // const isIOS = !(
    //   navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
    //   navigator.userAgent.match(/AppleWebKit/)
    // );

    var success = (position) => {
      this.setState({ lat: position.coords.latitude, long: position.coords.longitude },()=>{
        // if ((this.state.lat < point.lat + 0.1) && (this.state.lat > point.lat - 0.1) && (this.state.long < point.long + 0.1) && (this.state.long > point.long - 0.1)) {
        //   window.navigator.vibrate(500);
        // }
      });
      console.log(this.state);

      

      var calcDegreeToPoint = (latitude, longitude) => {
        
  
        const phiK = (point.lat * Math.PI) / 180.0;
        const lambdaK = (point.long * Math.PI) / 180.0;
        const phi = (latitude * Math.PI) / 180.0;
        const lambda = (longitude * Math.PI) / 180.0;
        const psi =
          (180.0 / Math.PI) *
          Math.atan2(
            Math.sin(lambdaK - lambda),
            Math.cos(phi) * Math.tan(phiK) -
            Math.sin(phi) * Math.cos(lambdaK - lambda)
          );
        return Math.round(psi);
      }

    var locationHandler = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      pointDegree = calcDegreeToPoint(latitude, longitude);

      if (pointDegree < 0) {
        pointDegree = pointDegree + 360;
      }
    }

    

    locationHandler(position);
      console.log(pointDegree);
    }

    function error() { alert('Please enable your GPS position feature.'); };

    var options = { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true };

    navigator.geolocation.watchPosition(success, error, options);

    var handler = (e) => {
      var compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
      // var compass =  Math.abs(e.alpha - 360);
      this.setState({ orientation: compass }, () => {
        console.log(this.state.orientation);
      })

      var aiguille = document.getElementsByClassName("aiguille")[0];

      if (
        (pointDegree < Math.abs(compass) && pointDegree + 20 > Math.abs(compass)) ||
        pointDegree > Math.abs(compass + 20) ||
        pointDegree < Math.abs(compass)
      ) {
        aiguille.setAttribute("src","img\\Aiguille.png");
      } else if (pointDegree) {
        aiguille.setAttribute("src","img\\AiguilleGood.png");
      }
    }


    // if (isIOS) {
    //   DeviceOrientationEvent.requestPermission()
    //     .then((response) => {
    //       if (response === "granted") {
    //         window.addEventListener("deviceorientation", handler, true);
    //       } else {
    //         alert("has to be allowed!");
    //       }
    //     })
    //     .catch(() => alert("not supported"));
    // } else {
      window.addEventListener("deviceorientationabsolute", handler, true);
    // }

    

  }

  


  render() {
    return (
      <div className="compass">
        <div className="roundBack">
          <img className="aiguille" src='img\Aiguille.png' alt="aiguille" />
          <img style={{ transform: "rotate(" + this.state.orientation + "deg)" }} className="logoCompass" src='img\Compass.png' alt="logo" />
        </div>
        {/* <div className="coord">
          {this.state.lat} & {this.state.long} & {this.state.direction}
        </div>
        <div className="coord">
          {this.state.orientation}
        </div> */}
      </div>
    )
  }
}

export default Compass