import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {

  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route exact path="/country/:name">
            <CountryDetail />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
