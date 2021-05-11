import React from 'react';
import {Switch, Route} from "react-router-dom";
import Enigmas from './js/Views/Enigmas';
import EquipName from './js/Views/EquipName';
import Home from './js/Views/Home';
import SecurityAdvices from './js/Views/SecurityAdvices';
import Waiting from './js/Views/Waiting';

 class AppRouter extends React.Component {
    render() {
      return (
        <>
            <Switch>
                <Route exact path="/" component={Waiting}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/equip" component={EquipName}/>
                <Route exact path="/secu" component={SecurityAdvices}/>
                <Route exact path="/enigmas" component={Enigmas}/>
            </Switch>
        </>
      )
    }
  }

  export default AppRouter
