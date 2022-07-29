import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from './pages/Main';
import Cadastro from './pages/Cadastro';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/Ponto" component={Main}/>
        <Route path="/Cadastro" component={Cadastro}/>
      </Switch>
    </BrowserRouter>
  );
}
