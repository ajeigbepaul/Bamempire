import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [qty, setQty] = useState(5);

  return (
    <AuthContext.Provider value={{ auth, setAuth, qty, setQty }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
