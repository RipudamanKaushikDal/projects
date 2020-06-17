import React from 'react';
import NavBar from'./Componenets/NavBar';
import Routes from './Routes';
import { Switch, Route} from 'react-router-dom'; 



function App() {
  return (
    <>
    <NavBar />
      <Switch>
          {Routes.map((route) => (
          <Route exact path={route.path} >
            <route.component />
          </Route>
          ))}
      </Switch>
    </>
      
    
  );
}

export default App;
