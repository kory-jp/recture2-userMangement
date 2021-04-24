import {React, createContext, useContext, useState } from "react";

export const LoginUserContext = createContext({});

export const LoginUserProvider = (props) => {
  const { children } = props
  const [ loginUser, setLoginUser ] = useState();
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}

export const useLoginUser = () => useContext(LoginUserContext)