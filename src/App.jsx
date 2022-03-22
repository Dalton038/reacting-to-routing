import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import FilmList from "./components/FilmList";
import PeopleList from "./components/PeopleList";
import PeopleDetails from "./components/PeopleDetail";

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
           <Route exact path="/people/:id" component={PeopleDetails} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;