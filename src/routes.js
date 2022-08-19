import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Main from './pages/Main';
import Cadastro from './pages/Cadastro';
import Ponto from './pages/Ponto';

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/"component={Main}></Route> 
        <Route path="/Cadastro" component={Cadastro}/>
        <Route path="/Ponto" component={Ponto}/>
      </Switch>
    </BrowserRouter>
  );
}
