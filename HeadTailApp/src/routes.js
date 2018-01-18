import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Main from './components/Main';
import aboutGame from './components/aboutGame';
import OtherGames from './components/otherGames';
import Result from './components/Result';

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="main" component={Main} initial title="Cara ou Coroa" titleStyle={{ alignSelf: 'center'}} />
      <Scene key="aboutGame" component={aboutGame} title="About The Game" titleStyle={{ alignSelf: 'center'}} />
      <Scene key="otherGames" component={OtherGames} title="Other Games" titleStyle={{ alignSelf: 'center'}} />
      <Scene key="result" component={Result} />
    </Scene>
  </Router>
);


export default Routes;
