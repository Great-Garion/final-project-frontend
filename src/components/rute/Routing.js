import { Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";

import About from "../about/About";
import Contact from "../contact/Contact";
import Home from "../main/Home";
import Alihan from "./404";
import Footer from "../footer/Footer";
import Login from "../user/Login";
import Register from "../user/Register";
import ListWisata from "../wisata/ListWisata";
import Detail from "../detail/Detail";
import Review from "../review/Review";
import { UserContext } from "../../Context/UserProvider";

function Routing() {
  let { isLogin } = useContext(UserContext);
  return (
    <Switch>
      <Route exact path="/">
        <Home />
        <Footer />
      </Route>
      <Route path="/about">
        <About />
        <Footer />
      </Route>
      <Route path="/home">
        <Home />
        <Footer />
      </Route>
      <Route path="/login">{isLogin ? <Redirect to="/" /> : <Login />}</Route>
      <Route path="/register">
        {isLogin ? <Redirect to="/" /> : <Register />}
      </Route>
      <Route path="/contact">
        <Contact />
        <Footer />
      </Route>
      <Route exact path="/wisata">
        <ListWisata />
      </Route>
      <Route path="/wisata/:id">
        <Detail />
      </Route>
      <Route path="/detail/:id">
        <Review />
      </Route>
      <Route path="/:alihan">
        <Alihan />
      </Route>
    </Switch>
  );
}
export default Routing;
