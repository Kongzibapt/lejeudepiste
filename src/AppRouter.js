import React from 'react';
import {Switch, Route} from "react-router-dom";
import EquipName from './js/Views/EquipName';
import Home from './js/Views/Home';
import SecurityAdvices from './js/Views/SecurityAdvices';
import Tuto from './js/Views/Tuto';
import Waiting from './js/Views/Waiting';
import KiosqueEnigma from './js/Views/KiosqueEnigma';
import Direction from './js/Views/Direction';
import Test from './js/Views/Test';
import WrongDevice from './js/Views/WrongDevice';
import Museum from './js/Views/Museum';
import Solo from './js/Views/Solo';
import Pierre from './js/Views/Pierre';
import Fabie from './js/Views/Fabie';
import Amans from './js/Views/Amans';
import Armagnac from './js/Views/Armagnac';
import Vestiges from './js/Views/Vestiges';
import Mazel from './js/Views/Mazel';

 class AppRouter extends React.Component {

  getDeviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };

    render() {
      return (
        <>
        {this.getDeviceType() === "desktop" ?
          <Switch>
            <Route exact path="/" component={Waiting}/>
              <Route exact path="/home" component={WrongDevice}/>
              <Route exact path="/equip" component={WrongDevice}/>
              <Route exact path="/secu" component={WrongDevice}/>
              <Route exact path="/tuto" component={WrongDevice}/>
              <Route exact path="/kiosqueenigma" component={WrongDevice}/>
              <Route exact path="/direction" component={WrongDevice}/>
              <Route exact path="/solo" component={WrongDevice}/>
              <Route exact path="/museum" component={WrongDevice}/>
              <Route exact path="/pierre" component={WrongDevice}/>
              <Route exact path="/fabie" component={WrongDevice}/>
              <Route exact path="/amans" component={WrongDevice}/>
              <Route exact path="/armagnac" component={WrongDevice}/>
              <Route exact path="/vestiges" component={WrongDevice}/>
              <Route exact path="/mazel" component={WrongDevice}/>
              <Route exact path="/test" component={WrongDevice}/>
          </Switch>  
        :
          <Switch>
              <Route exact path="/" component={Waiting}/>
              <Route exact path="/home" component={Home}/>
              <Route exact path="/equip" component={EquipName}/>
              <Route exact path="/secu" component={SecurityAdvices}/>
              <Route exact path="/tuto" component={Tuto}/>
              <Route exact path="/kiosqueenigma" component={KiosqueEnigma}/>
              <Route exact path="/direction/:page" component={Direction}/>
              <Route exact path="/solo" component={Solo}/>
              <Route exact path="/museum" component={Museum}/>
              <Route exact path="/pierre" component={Pierre}/>
              <Route exact path="/fabie" component={Fabie}/>
              <Route exact path="/amans" component={Amans}/>
              <Route exact path="/armagnac" component={Armagnac}/>
              <Route exact path="/vestiges" component={Vestiges}/>
              <Route exact path="/mazel" component={Mazel}/>
              <Route exact path="/test" component={Test}/>
          </Switch>
          }
        </>
      )
    }
  }

  export default AppRouter
