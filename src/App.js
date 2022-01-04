import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Alihan from "./components/404";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import ListWisata from "./components/ListWisata";
import Detail from "./components/Detail";
import { useContext } from "react";
import { UserContext } from "./Context/UserProvider";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  let {isLogin} = useContext(UserContext)
  return (
    <Router>
      <div>
        <Navbar />
      </div>

      <Switch>
        <Route exact path="/">
          
          <Home />
          <Footer/>
        </Route>
        <Route path="/about">
          <About />
          <Footer/>
        </Route>
        <Route path="/login">
          {isLogin ? <Redirect to="/" /> :  <Login /> }
     
        </Route>
        <Route path="/register">
         {isLogin ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/contact">
          <Contact />
          <Footer/>
        </Route>
        <Route exact path="/wisata">
          <ListWisata />
        </Route>
        <Route path="/wisata/:id">
           <Detail/> 
         
        </Route>
        <Route path="/:alihan">
          <Alihan />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
