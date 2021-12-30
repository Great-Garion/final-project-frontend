import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Alihan from "./components/404";
import Footer from "./components/Footer";
import Object from "./components/Object";
import ListWisata from "./components/ListWisata";
import Navbar from "./components/Navbar";
import Store from "./components/Store";

function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <img
          style={{
            borderRadius: "10px",
            display: "block",
            marginLeft: "auto",
            marginTop: "20px",
            marginRight: "auto",
          }}
          src="https://www.goodnewsfromindonesia.id/uploads/post/large-shutterstock-1482770729-acbd72dfa8c68fe8d3ccf8eac99e007e.jpg"
          width={650}
          height={400}
        />
        <Object />
        <ListWisata /><br/>
        <Store />
        <Footer />
      </div>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/:alihan">
          <Alihan />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
