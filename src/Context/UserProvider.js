import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export const UserContext = createContext();

function UserProvider(props) {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(async () => {
    const token = Cookies.get("lokaKota");
    if (token) {
      setIsLogin(true);
      await axios.get("https://lokakota.herokuapp.com/user", {
        headers: { Authorization: `Bearer${token}` },
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ isLogin, setIsLogin }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
