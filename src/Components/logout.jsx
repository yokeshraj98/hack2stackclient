import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

const Logout = () => {
  const [toHome, setToHome] = useState(false);
  const history= useHistory();
  useEffect(() => {
    const token = new Cookies();
    token.remove("token");
    setToHome(true);
    history.push("/home")

  }, []);
 
};

export default Logout;
