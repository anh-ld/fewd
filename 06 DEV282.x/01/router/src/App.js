import React from "react";
// import { render } from "react-dom";
import { BrowserRouter, Route, Link, Redirect, Prompt } from "react-router-dom";
import '@atlaskit/css-reset';

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Users = ({ match }) => {
  return (
    <div>
      Users {match.path} {match.url} {match.params.id}
    </div>
  )
}
const Info = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={match.url + "/phone"}>Phone</Link>
        </li>
        <li>
          <Link to={match.url + "/email"}>Email</Link>
        </li>
        <li>
          <Link to={match.url + "/address"}>Address</Link>{" "}
        </li>
      </ul>
      <hr />
      <Route
        path={match.url + "/phone"}
        render={props => <div>Phone: 123 456 7890</div>}
      />
      <Route
        path={match.url + "/email"}
        render={props => <div>Email: email@email.com</div>}
      />
      <Route
        path={match.url + "/address"}
        render={props => <div>Address: 123 Address</div>}
      />
    </div>
  );
}

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>{" "}
        </li>
        <li>
          <Link to="/info">Info</Link>{" "}
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      {/* <Redirect exact from="/" to="/about" /> */}
      <Route path="/about" component={About} />
      <Route path="/users/:id" component={Users} />
      <Route path="/info" component={Info} />
      <Prompt when={false} message="Are you sure you want to leave?"/>
    </div>
  </BrowserRouter>
);

export default App;