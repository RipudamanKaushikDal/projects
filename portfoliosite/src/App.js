import React from 'react';
import './App.css';
import Navigation from'./Componenets/NavBar';
import Routes from './Routes';
import {Switch,Route} from 'react-router-dom'; 
import CssBaseline from '@material-ui/core/CssBaseline';
import NotFound from './Componenets/NotFound';







function App() {
  return (
    <div className="container">
    <CssBaseline />
    <Navigation />
    <Switch>
      <Route exact path={Routes[0].path} component={Routes[0].component} />
      <Route path={Routes[1].path} component={Routes[1].component} />
      <Route path={Routes[2].path} component={Routes[2].component} />
      <Route path={Routes[3].path} component={Routes[3].component} />
      <Route path={Routes[4].path} component={Routes[4].component} />
      <Route path = '*' component= {NotFound} />  
    </Switch>
     
      
    </div>
      
    
  );
}

export default App;
