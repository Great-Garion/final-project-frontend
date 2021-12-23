import { UseContext } from "react";
import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { UserContext } from "../Context/UserProvider";
  import Login from './login'
  import Register from './Register'

  function Routing(){
    // let { isLogin } = useContext(UserContext);
      return(
         
    <Switch>
         <Route exact path="/Register">
         <Register/>
        </Route>
         <Route path="/login"><Login/></Route> 
    </Switch>
      )
  }
  export default Routing