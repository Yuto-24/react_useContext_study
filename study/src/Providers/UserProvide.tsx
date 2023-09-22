import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props: any) => {
  const { children } = props;
  // const contextName = "Yuto";
  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
