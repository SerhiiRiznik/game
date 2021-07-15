import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Game from './components/Game';
import Header from './components/Header';
import Test from './components/BestResult';
import Footer from './components/Footer';
const App:React.FC=()=> {
  return (
    <Router>
        <Header />
        <Switch>
          <Route  path="/game"  component={Game} />
          <Route path="/test" component={Test} />
        </Switch>
        <Footer/>
      </Router> 
  )
}

export default App;
