import React from 'react';
import './App.css';
import NavBar from'./Componenets/NavBar';
import Routes from './Routes';
import { Switch, Route} from 'react-router-dom'; 





function App() {
  return (
    <div className="container">
    <NavBar />
    <Switch>
        {Routes.map((route) => (
          <Route exact path={route.path} >
            <route.component />
          </Route>
          ))}
    </Switch>
   
    
      
    </div>
      
    
  );
}

export default App;
