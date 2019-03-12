import React, { Component } from "react";
import PropTypes from 'prop-types'
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Track from './components/tracks/Track'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import './App.css';
import Lyrics from "./components/tracks/Lyrics";

class App extends Component {
  
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />                
              </Switch>
            </div>
          </React.Fragment>
        </Router>        
      </Provider>
    );
  }
}

export default App;
