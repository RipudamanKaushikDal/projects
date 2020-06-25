import React from 'react';
import './App.css';
import NavBar from'./Componenets/NavBar';
import Routes from './Routes';
import {Switch,Route} from 'react-router-dom'; 







function App() {
  return (
    <div className="container">
    <NavBar />
    <Switch>
      <Route exact path={Routes[0].path} component={Routes[0].component} />
      <Route path={Routes[1].path} component={Routes[1].component} />
      <Route path={Routes[2].path} component={Routes[2].component} />
      <Route path={Routes[3].path} component={Routes[3].component} />
      <Route path={Routes[4].path} component={Routes[4].component} />  
    </Switch>
     
      
    </div>
      
    
  );
}

export default App;
