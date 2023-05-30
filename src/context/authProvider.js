import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [qty, setQty] = useState(1);
  const [totalProducts, setTotalProducts] = useState("")
  const [totalUsers, setTotalUsers] = useState("");
  const [orderId, setOrderId] = useState("")

  return (
    <AuthContext.Provider value={{ auth, setAuth, qty, setQty, totalUsers, setTotalUsers, totalProducts, setTotalProducts, orderId, setOrderId }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
