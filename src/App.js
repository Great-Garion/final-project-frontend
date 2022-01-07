import { BrowserRouter as Router  } from "react-router-dom";
import {Helmet} from "react-helmet";

import Routing from "./components/rute/Routing";
import Navbar from "./components/main/Navbar"

function App() {
  return (
    <Router>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Loka Kota</title>
          <meta name="description" content="Loka Kota" />
        </Helmet>
        <Navbar />
      <Routing/>
    </Router>
  );
}

export default App;
