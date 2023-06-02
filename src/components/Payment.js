import React, { useEffect, useState } from "react";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Input from "./Input";
import Navbar from "./Navbar";
import PaymentModal from "./PaymentModal"
import {FcDisclaimer} from 'react-icons/fc'
import { PaystackButton } from "react-paystack";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { selectItems, selectTot, clearBasket } from "../slice/basketSlice";
import { addOrder } from "../slice/orderSlice";
import { addPay } from "../slice/paySlice";
import useAxiosPrivate from "../hooks/useAxios";
import "./Payment.css";
import { toast } from "react-hot-toast";
function Payment() {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(selectItems);
  const total = useSelector(selectTot);
  // chose the div to show based on the option choosen
  const [selectedOption, setSelectedOption] = useState("option1");
   const handleChange = (e) => {
     setSelectedOption(e.target.value);
   };
  // const total = useSelector(selectTotal)
  const [fullname, SetFullname] = useState("");
  const [address1, SetAddress1] = useState("");
  // const [address2, SetAddress2] = useState("");
  const [state, SetState] = useState("");
  const [city, SetCity] = useState("");
  const [phone, SetPhone] = useState("");
  const [email, SetEmail] = useState("");

  // MODAL
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  function action() {
     setShow(false);
     dispatch(clearBasket());
     navigate("/success", { replace: true });
  }
  const handleClose = () => {
    setShow(false);
    // PLEASE KINDLY CHECK THIS FOR ME. NEED TO REDIRECT BACK TO WHERE IT IS NOW BEFOR THE MODAL
    navigate("/payment");
  };
  
  // pk_live_5e1f2acad42dd3d6f2dd66bd7da82bc76370ef19
  // pk_test_bf02b912b6e3eacfbeb152117db46ef994d94964
  // const publicKey = "pk_test_bf02b912b6e3eacfbeb152117db46ef994d94964"; // Replace with your public key
  // const publicKey = "pk_live_5e1f2acad42dd3d6f2dd66bd7da82bc76370ef19";
  const address = {
    fullname,
    address1,
    // address2,
    state,
    city,
    phone,
    email,
  };
  const reference = new Date().getTime().toString();
  // To PAYSTACK
  // const config = {
  //   reference: new Date().getTime().toString(),
  //   email: address.email,
  //   amount: total * 100,
  //   publicKey: publicKey,
  // };
  // TO ORDER DB
  const addressdata = {
    fullname,
    address1,
    state,
    city,
    phone,
    email,
  };
  //GENERATE RANGOM HEX NUMEBER EG 001
  // const [hexNumber, setHexNumber] = useState("");

  // useEffect(() => {
  //   const generateRandomHex = () => {
  //     let counter = 1;
  //     return function () {
  //       const hex = counter.toString(16).padStart(3, "0");
  //       counter++;
  //       return hex;
  //     };
  //   };

  //   const getRandomHex = generateRandomHex();

  //  if (show) {
  //    setHexNumber(getRandomHex());
  //  }
  // }, [show]);
  // Generate a random 7-digit hexadecimal number
  const randomHex = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
  const pref = "bam";
  const sufix = "ord";
  const newProductId = pref + randomHex + sufix;
  // console.log(newProductId)
  // const products = {}
  const orderdata = {
    userId: auth?.id,
    products: items,
    total: total,
    address: addressdata,
    // orderNumber: newProductId,
    // status: config.reference.status,
  };
  // TO PAYMENT DB
  const paydata = {
    fullname,
    email,
    amount: total,
    reference: reference,
  };
  const PostPay = async () => {
    try {
      const response = await axiosPrivate.post("/payments", paydata);
      const result = response.data;
      result
        ? dispatch(addPay(paydata))
        : toast.error("try again something went wrong");
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  const PostOrder = async () => {
    try {
      const response = await axiosPrivate.post("/ordermes", orderdata);
      const result = response.data;
      result
        ? dispatch(addOrder(orderdata))
        : toast.error("try again something went wrong");
    } catch (error) {
      console.log(error);
      toast.error("try again network issue");
    }
  };
  const postSales = async () => {
    try {
      const response = await axiosPrivate.post("/sales", orderdata);
      const result = response.data;
      return result;
    } catch (error) {
      toast.error("could not post sales try again");
    }
  };
  // const handleFinished = ()=>{
  //    dispatch(clearBasket());
  //    navigate('/success')
  // }
  const handleShow=()=> {
    // setShow(true);
    try {
      PostPay();
      PostOrder();
      postSales();
      navigate('/transfer')

    } catch (error) {
      toast.error("something went wrong try again");
    }
  }
  // const handlePaystackSuccessAction = (reference) => {
  //   try {
  //     PostPay();
  //     PostOrder();
  //     postSales();
  //     dispatch(clearBasket());
  //     navigate("/success");
  //   } catch (error) {
  //     toast.error("something went wrong try again");
  //   }
  // };
  // you can call this function anything
  // const handlePaystackCloseAction = () => {
  //   console.log("closed");
  // };

  // const componentProps = {
  //   ...config,
  //   text: "Proceed to Pay",
  //   onSuccess: (reference) => {
  //     handlePaystackSuccessAction(reference);
  //   },
  //   onClose: handlePaystackCloseAction,
  // };

  return (
    <div className="payment">
      <Announcement />
      <Navbar />
      <div className="payment__container">
        <div className="billing__formWrapper">
          <span>Choose your delivery option</span>
          <div className="billing__options">
            {" "}
            <label className="billing__label">
              <input
                type="radio"
                name="radioOption"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleChange}
              />
              Delivery
            </label>
            <label className="billing__label">
              <input
                type="radio"
                name="radioOption"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleChange}
              />
              Pick-Up
            </label>
          </div>
          {selectedOption === "option1" && (
            <div className="billing__address">
              <div className="billing__title">Delivery Address</div>
              <div className="pickup">
                <p className="pickup">
                  {" "}
                  Address: Plot 188 Iganmode road Opposite AUD Senior Sec.
                  school. Tollgate Road, Sango Ota
                </p>
                <p>Tel: 08028580080, 08164941121</p>

                <span style={{ color: "white" }}>
                  Delivery Duration‼️
                  <FcDisclaimer />
                  <br></br> Please kindly note delivery within Lagos is
                  48-72hours
                </span>
                <br></br>
                <span style={{ color: "white" }}>
                  Interstate is 3-5 working days
                </span>
              </div>
              <form>
                <Input
                  placeholder="Fullname"
                  type="text"
                  value={fullname}
                  onChange={(e) => SetFullname(e.target.value)}
                />
                <Input
                  placeholder="Residential Address"
                  type="text"
                  value={address1}
                  onChange={(e) => SetAddress1(e.target.value)}
                />
                <Input
                  placeholder="City"
                  type="text"
                  value={state}
                  onChange={(e) => SetState(e.target.value)}
                />
                <Input
                  placeholder="State"
                  type="text"
                  value={city}
                  onChange={(e) => SetCity(e.target.value)}
                />
                <Input
                  placeholder="Phone number"
                  type="text"
                  value={phone}
                  onChange={(e) => SetPhone(e.target.value)}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                />
              </form>
            </div>
          )}
          {selectedOption === "option2" && (
            <div className="billing__address">
              <div className="billing__title">Pick-UP Address</div>
              <div className="pickup">
                <p className="pickup">
                  {" "}
                  Address: Plot 188 Iganmode road Opposite AUD Senior Sec.
                  school. Tollgate Road, Sango Ota
                </p>
                <p>Tel: 08028580080, 08164941121</p>

                <span style={{ color: "white" }}>
                  Delivery Duration‼️
                  <FcDisclaimer />
                  <br></br> Please kindly note delivery within Lagos is
                  48-72hours
                </span>
                <br></br>
                <span style={{ color: "white" }}>
                  Interstate is 3-5 working days
                </span>
              </div>
              <form>
                <Input
                  placeholder="Fullname"
                  type="text"
                  value={fullname}
                  onChange={(e) => SetFullname(e.target.value)}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                />
              </form>
            </div>
          )}

          <div className="pay__container">
            <div className="pay__image">
              <img src="/images/visa-mastercard.png" alt="cardimg" />
            </div>
            {/* <PaystackButton className="pay__title" {...componentProps} /> */}
            <div>
              <button className="pay__title" onClick={handleShow}>
                Proceed to Pay
              </button>
              {/* <button className="pay__title" onClick={()=>navigate('/transfer')}>
                finished
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <PaymentModal
        show={show}
        handleClose={handleClose}
        // setShow={setShow}
        title="Account Details"
        action={action}
        actionTitle="Pay"
      />
      <Footer />
    </div>
  );
}

export default Payment;
