import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";

function User() {
  useEffect(async () => {
    const token = Cookies.get("lokaKota");
    console.log(token)
    const result = await axios.get("https://lokakota.herokuapp.com/user", {
      headers: { Authorization: `Bearer${token}` },
    });
    console.log(result);
  }, []);
  return;
    <div>
        <h4></h4>
    </div>;
}

export default User;
