import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [isSignup, setSignUp] = useState(false);
  const [isLogin, setLogin] = useState(false);

  //   // Example: Using useHistory for navigation
  const navigate = useNavigate();

  // Example: Redirect to /login when isSignup changes
  React.useEffect(() => {
    if (isSignup) {
      navigate("/login");
    }
  }, [isSignup]);

  // Example: Redirect to /main when isLogin changes
  React.useEffect(() => {
    const fetchData = async () => {
      if (isLogin) {
        let result = await window.api.getConversation();
        console.log(result);
        navigate("/main");
      }
    };
    fetchData();
  }, [isLogin]);

  const value = { isSignup, isLogin, setSignUp, setLogin };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
