import "./App.css";
import { Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
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
import { Toaster } from "react-hot-toast";
import Dashboard from "./admin/Dashboard"
import Products from "./admin/Products"
import Summary from "./admin/Summary"
import CreateProduct from "./admin/CreateProduct"
import Orders from "./admin/Oders"
import WidgetLg from "./admin/WidgetLg"
// import WidgetSm from "./admin/WidgetSm"

// import AdminLogin from "./admin/auth/AdminLogin"
// import NotFound from "./admin/NotFound";
import CreateImages from "./admin/CreateImages";
import AllProducts from "./admin/AllProducts";
import NotAllowed from "./components/NotAllowed";
// import RequiredAuth from "./components/RequiredAuth";
import Missing from "./components/Missing";
import ProtectedRoute from "./components/ProtectedRoutes";
import ForgetPassword from "./components/ForgetPassword";
// import AllUsers from "./admin/AllUsers";
import WidgetSm from "./admin/WidgetSm";


function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route exact path="/" element={<BamEmpire />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/updatepassword" exact element={<ForgetPassword />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="notallowed" exact element={<NotAllowed />} />

        <Route element={<ProtectedRoute allowedRoles={[1001]} />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/pay" element={<Paystack />} />
          {/* General user */}
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Productss />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pay" element={<Paystack />} />
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
