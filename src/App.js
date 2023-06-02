import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import Paystack from "./components/Paystack";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Tracking from "./pages/Tracking";
import Productss from "./pages/Productss";
import Register from "./pages/Register";
import BamEmpire from "./pages/BamEmpire";
import ProductList from "./pages/ProductList";
import Payment from "./components/Payment";
import Success from "./components/Success";
import { Toaster, toast } from "react-hot-toast";
import Dashboard from "./admin/Dashboard"
import Products from "./admin/Products"
import CreateProduct from "./admin/CreateProduct"
import WidgetLg from "./admin/WidgetLg"
import CreateImages from "./admin/CreateImages";
import AllProducts from "./admin/AllProducts";
import NotAllowed from "./components/NotAllowed";
import Missing from "./components/Missing";
import ProtectedRoute from "./components/ProtectedRoutes";
import ForgetPassword from "./components/ForgetPassword";
import WidgetSm from "./admin/WidgetSm";
import useAuth from "./hooks/useAuth";
import LogoutOnTokenExpiration from "./components/LogoutTokenExpiration";
import Transfer from "./components/Transfer";


function App() {
  LogoutOnTokenExpiration()
  //  const navigate = useNavigate();
  //  const { auth,setAuth } = useAuth();
  //  const token = auth?.accessToken;

  //  const isTokenExpired = (token) => {
  //    try {
  //      const decodedToken = jwt_decode(token);
  //      const currentTime = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds
  //      return decodedToken.exp < currentTime;
  //    } catch (error) {
  //      return true; 
  //    }
  //  };

  //  useEffect(() => {
  //    if (isTokenExpired(token)) {
  //      setAuth({});
  //      navigate("/");
  //    }
  //  }, [token, useAuth, navigate]);
  return (
    <>
      <Toaster />
      <Routes>
        <Route exact path="/" element={<BamEmpire />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/updatepassword" exact element={<ForgetPassword />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Productss />} />
        <Route path="notallowed" exact element={<NotAllowed />} />
        <Route element={<ProtectedRoute allowedRoles={[1001]} />}>
          <Route path="/pay" element={<Paystack />} />
          <Route path="/transfer" element={<Transfer/>}/>
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/trackorder" element={<Tracking />} />
        </Route>
        <Route element={<ProtectedRoute allowedRoles={[2001]} />}>
          <Route exact path="/admindashboard" element={<Dashboard />} />
          <Route path="/createproducts" element={<CreateProduct />} />
          <Route path="/product" element={<Products />} />
          <Route path="/orders" element={<WidgetLg />} />
          <Route path="/allusers" element={<WidgetSm />} />
          {/* <Route path="/uploadimage" element={<CreateImages />} /> */}
          <Route path="images/:id" element={<CreateImages />} />
          <Route path="/allproducts" element={<AllProducts />} />
        </Route>

        <Route path="*" element={<Missing />} />
      </Routes>
    </>
  );
}

export default App;
