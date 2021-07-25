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
          <main className='text-light m-2'>
            <Switch>
              
              <Route path="/game"  component={Game} />
              <Route path="/bestresult" component={BestResult} />
              <Route path="*">
                <Redirect to={'/game'}/>
              </Route>
            </Switch>
          </main>
        <Footer/>
      </Router>
  )
}

export default App;
