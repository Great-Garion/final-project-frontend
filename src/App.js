import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login";
import Register from "./Component/Register";
import User from "./Component/User";

import Detail from "./Component/Detail";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          {" "}
          <User />
        </Route>
        <Route path="/login">
          {" "}
          <Login />
        </Route>
        <Route path="/register">
          {" "}
          <Register />
        </Route>
        <Route path="/detail">
          {" "}
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
