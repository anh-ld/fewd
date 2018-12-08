import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import About from './About';
import Error from './Error';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Nav from './Nav';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Redirect exact path="/" to="/about" />
          <Route path='/about' component={About} />
          <Route path='/resume' component={Resume} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;