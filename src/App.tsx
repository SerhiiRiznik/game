import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Game from './components/Game';
import Header from './components/Header';
import BestResult from './components/BestResult';
import Footer from './components/Footer';

function App(props:any) {

  return (
    <Router>
        <Header />
          <main className='text-light'>
            <Switch>
              <Route exact path="/"  component={Game} />
              <Route path="/bestresult" component={BestResult} />
            </Switch>
          </main>
        <Footer/>
      </Router>
  )
}

export default App;
