import React from 'react'
import { PaystackButton } from 'react-paystack';

function Paystack() {
// const [amount, setamount] = useState("");
const publicKey = "pk_test_bf02b912b6e3eacfbeb152117db46ef994d94964"; // Replace with your public key
const config = {
    reference: (new Date()).getTime().toString(),
    email: "pdave4krist@yahoo.com",
    amount: 50000,
    publicKey: publicKey,
  };
const handlePaystackSuccessAction = (reference) => {
    console.log(reference);
  };
  // you can call this function anything
  const handlePaystackCloseAction = () => {
    console.log('closed')
  }

  const componentProps = {
      ...config,
      text: 'Pay',
      onSuccess: (reference) => {
      handlePaystackSuccessAction(reference)},
      onClose: handlePaystackCloseAction,
  };
  return (
    <div>
        <PaystackButton
    {...componentProps}/>
  </div>
      
  )
}

export default Paystack