import React from 'react';
import {Switch, Route} from "react-router-dom";
import EquipName from './js/Views/EquipName';
import Home from './js/Views/Home';
import SecurityAdvices from './js/Views/SecurityAdvices';
import Tuto from './js/Views/Tuto';
import Waiting from './js/Views/Waiting';
import KiosqueEnigma from './js/Views/KiosqueEnigma';
import Direction from './js/Views/Direction';

 class AppRouter extends React.Component {
    render() {
      return (
        <>
            <Switch>
                <Route exact path="/" component={Waiting}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/equip" component={EquipName}/>
                <Route exact path="/secu" component={SecurityAdvices}/>
                <Route exact path="/tuto" component={Tuto}/>
                <Route exact path="/kiosqueenigma" component={KiosqueEnigma}/>
                <Route exact path="/direction" component={Direction}/>
            </Switch>
        </>
      )
    }
  }

  export default AppRouter
