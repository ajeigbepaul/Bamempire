import React, { useState } from "react";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Input from "./Input";
import Navbar from "./Navbar";
import { PaystackButton } from 'react-paystack';
import  {useSelector} from "react-redux"
import "./Payment.css";
function Payment() {
const cart = useSelector(state=>state.cart)
const [fullname, SetFullname] = useState("")
const [address1, SetAddress1] = useState("")
const [address2, SetAddress2] = useState("")
const [state, SetState] = useState("")
const [city, SetCity] = useState("")
const [phone, SetPhone] = useState("")
const [email, SetEmail] = useState("")


const publicKey = "pk_test_bf02b912b6e3eacfbeb152117db46ef994d94964"; // Replace with your public key
const address = {
fullname,address1,address2,state,city,phone,email
}
// To PAYSTACK
const config = {
  reference: (new Date()).getTime().toString(),
  email: email,
  amount: cart.total,
  publicKey: publicKey,
};
// TO ORDER DB
const orderdata = {

}
// TO PAYMENT DB
const paydata = {
  fullname,
  email,
  amount:cart.total,
  reference:config.reference
}

const handlePaystackSuccessAction = (reference) => {
    console.log(reference);
    // navigate to success page.
  };
  // you can call this function anything
  const handlePaystackCloseAction = () => {
    console.log('closed')
  }

  const componentProps = {
      ...config,
      text: 'Proceed to Pay',
      onSuccess: (reference) => {
        handlePaystackSuccessAction(reference)},
      onClose: handlePaystackCloseAction,
  };
  
  return (
    <div className="payment">
      <Announcement/>
      <Navbar/>
      <div className='payment__container'>
        <div className='billing__formWrapper'>
            <div className='billing__title'>Delivery Address</div>
            <form>
            <Input placeholder="Fullname" type="text" value={fullname} onChange={e=>SetFullname(e.target.value)}/>
            <Input placeholder="Residential Address" type="text" value={address1} onChange={e=>SetAddress1(e.target.value)}/>
            <Input placeholder="Address 2" type="text" value={address2} onChange={e=>SetAddress2(e.target.value)}/>
            <Input placeholder="City" type="text" value={state} onChange={e=>SetState(e.target.value)}/>
            <Input placeholder="State" type="text" value={city} onChange={e=>SetCity(e.target.value)}/>
            <Input placeholder="Phone number" type="text" value={phone} onChange={e=>SetPhone(e.target.value)}/>
            <Input placeholder="Email" type="email" value={email} onChange={e=>SetEmail(e.target.value)}/>
            </form>
            <div className="pay__container">
          <div className="pay__image">
            <img src='/images/visa-mastercard.png' alt='cardimg'/>
          </div>
          <PaystackButton className='pay__title'
    {...componentProps}/>
        {/* <button className='pay__title'>Proceed to Pay</button> */}
        </div>
        </div>
    </div>
      <Footer/>
    </div>
  );
}

export default Payment;
