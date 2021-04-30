import React from 'react';
import {Switch, Route} from "react-router-dom";
import Enigmas from './js/Views/Enigmas';
import EquipName from './js/Views/EquipName';
import GameRules from './js/Views/GameRules';
import Home from './js/Views/Home';
import SecurityAdvices from './js/Views/SecurityAdvices';

 class AppRouter extends React.Component {
    render() {
      return (
        <>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/equip" component={EquipName}/>
                <Route exact path="/secu" component={SecurityAdvices}/>
                <Route exact path="/rules" component={GameRules}/>
                <Route exact path="/enigmas" component={Enigmas}/>
            </Switch>
        </>
      )
    }
  }

  export default AppRouter
