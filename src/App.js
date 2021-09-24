import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "@fire-ui/fire-ui/FireUI.min";
import "@fire-ui/fire-ui/FireUI.min.css";
import Home from "./Components/index.jsx";
import Register from "./Components/register.jsx";
import Login from "./Components/login.jsx";
import Logout from "./Components/logout.jsx";
import Navbar from "./Components/navbar.jsx";
import Create from "./Components/create.jsx";
import Question from "./Components/question.jsx";

const App = () => (
  <Router>
    <Route exact path="*" component={Navbar} />
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/question/:questionId" component={Question} />
    </Switch>
  </Router>
);

export default App;
