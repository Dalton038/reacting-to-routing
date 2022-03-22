import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FilmList from "./components/FilmList";
import PeopleList from "./components/PeopleList";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
         <a href="/">
            <button>Home</button>
          </a>
          
          <a href="/films">
           <button>Films</button>
         </a>
          
         <a href="/people">
         <button>People</button>
            </a>
          
          <Switch>
            <Route exact path="/films" component={FilmList} />
            <Route exact path="/people" component={PeopleList} />
           
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;