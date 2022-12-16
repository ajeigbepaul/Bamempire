import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Paystack from './components/Paystack';
import Cart from './pages/Cart'
import Login from "./pages/Login";
import Productss from './pages/Productss';
import Register from "./pages/Register";
import BamEmpire from "./pages/BamEmpire";
import ProductList from './pages/ProductList';
import Payment from "./components/Payment";
import Success from "./components/Success";
import Dashboard from "./admin/Dashboard"
import Products from "./admin/Products"
import Summary from "./admin/Summary"
import CreateProduct from "./admin/CreateProduct"
import Orders from "./admin/Oders"
import WidgetLg from "./admin/WidgetLg"
import WidgetSm from "./admin/WidgetSm"

import AdminLogin from "./admin/auth/AdminLogin"
import NotFound from "./admin/NotFound";

function App() {
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
 
  const admin = JSON.parse(user).currentUser?.isadmin;
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route exact path="/" element={<BamEmpire />} />
        <Route path="/login" element={currentUser ? <Navigate replace to="/" /> : <Login/>} />
        <Route  path="/register" element={currentUser ? <Navigate replace to="/" /> : <Register/>} />
        <Route  path="/products/:category" element={<ProductList />} />
        <Route  path="/product/:id" element={<Productss />} />
        <Route  path="/cart" element={<Cart />} />
        <Route  path="/pay" element={<Paystack/>} />
        <Route  path="/payment" element={<Payment/>} />
        <Route  path="/success" element={<Success/>} />

        <Route  path="/adminlogin" element={admin ? <Navigate replace to="/admin" /> : <AdminLogin/>} />
      
        <Route path="/admin" element={<Dashboard />}>
              <Route path="summary" element={<Summary />} />
              <Route path="products" element={<Products />}>
              <Route path="create-product" element={<CreateProduct />} />
              </Route>
              <Route path="orders" element={<Orders />} />
              <Route path="neworders" element={<WidgetLg/>}/>
              <Route path="newusers" element={<WidgetSm/>}/>
        </Route>
       

        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </Router>
  );
}

export default App;
