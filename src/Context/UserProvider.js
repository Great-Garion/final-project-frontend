import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
export let UserContext = createContext();

function UserProvider(props) {
  let [isReg, setIsReg] = useState(false);
  let [isLogin, setIsLogin] = useState(false);

  useEffect(async () => {
    const token = Cookies.get("lokaKota");
    if (token) {
      setIsLogin(true);
    //   const result = await axios.get("https://lokakota.herokuapp.com/user", {
    //     headers: { Authorization: `Bearer${token}` },
    //   });
    //   console.log(result);
    }
    console.log(token);
  }, []);
  return (
    <UserContext.Provider value={{ isLogin, setIsLogin, isReg, setIsReg }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserProvider;
