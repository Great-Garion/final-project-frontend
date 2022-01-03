import { UseContext } from "react";
import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";
  import Login from './login'
  import Register from './Register'
import Detail from "./Detail";

  function Routing(){
    // let { isLogin } = useContext(UserContext);
      return(
         
    <Switch>
         <Route exact path="/Register">
         <Register/>
        </Route>
         <Route path="/login"><Login/></Route> 
         <Route path="/detail"><Detail/> </Route> 
         
    </Switch>
      )
  }
  export default Routing