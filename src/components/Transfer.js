import React, { useCallback, useEffect, useState } from 'react'
import './Payment.css'
import useAxiosPrivate from '../hooks/useAxios';
import useAuth from '../hooks/useAuth';
import { selectTot } from "../slice/basketSlice";
import { clearBasket } from "../slice/basketSlice";

import { useDispatch, useSelector } from 'react-redux';
import {BiArrowBack} from 'react-icons/bi'
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import MoonLoader from "react-spinners/MoonLoader";

function Transfer() {
     const axiosPrivate = useAxiosPrivate();
      const { auth } = useAuth();
      const userId = auth?.id;
      const [order, setOrder] = useState([]);
      const total = useSelector(selectTot);
      const dispatch = useDispatch()
      const [loading, setLoading] = useState(false);
      const override = {
        display: "block",
        margin: "0 auto",
        // borderColor: "red",
      };

       useEffect(() => {
         const fetchOrders = async () => {
          setLoading(true);
           try {
             const response = await axiosPrivate.get(`/ordermes/user/${userId}`);
             setOrder(response.data);
             setLoading(false);
           } catch (error) {
             console.log(error);
           }
         };

         fetchOrders();
       }, [userId]);
      //  const fetchOrderNumber = useCallback(async () => {
      //   setLoading(true);
      //    try {
      //      const response = await axiosPrivate.get(`ordermes/user/${Id}`);
      //      console.log(response)
      //      setOrder(response.data);
            
      //    } catch (error) {
      //      console.log(error);
      //    }
      //  }, [Id, axiosPrivate]);
      //  useEffect(() => {
      //    fetchOrderNumber();
      //  }, [Id, fetchOrderNumber]);

       const handlePay = ()=>{
         dispatch(clearBasket());
         navigate("/success", { replace: true });
       }
      console.log(order)
      const latestOrderNumber = order?.map((orderItem) => orderItem?.orderNumber)[0];
      console.log(latestOrderNumber)
      const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      <div className="payment__instruction">
        <div className="payment__details">
          <h2>Payment information</h2>
          <div
            onClick={() => navigate(-1)}
            style={{
              cursor: "pointer",
              backgroundColor: "transparent",
              margin: "5px 0px",
              width: "60px",
              borderRadius: "10px",
              border: "2px solid grey",
            }}
          >
            <BiArrowBack />
            Back
          </div>
          <div className="payment__d">
            {" "}
            <span>
              Account Name: <span className="acct__det">Bam Empire</span>
            </span>
            <span>Zenith bank</span>
            <span>
              Account Number: <span className="acct__det">1227774541</span>
            </span>
          </div>
          <div className="payment__d">
            <div>
              Account Name: <span className="acct__det">Bam Empire</span>
            </div>
            <div>First bank</div>
            <div>
              Account Number: <span className="acct__det">2034212543</span>
            </div>
          </div>
        </div>
        <div className="payment__instruct">
          <h2 className="order__h">
            Amount : ₦ {total?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </h2>
          <h2 className="order__h">
            ORDER-ID :{latestOrderNumber}
          </h2>
          <h2 className="pay__h">Please follow this instructions</h2>
          <span className="d">1. Copy the account number</span>
          <span className="d">2. User the ORDER-ID as payment naration</span>
          <span className="d">
            3. Transfer exact order amount to any of the accounts
          </span>
          <span className="d">4. click on Pay</span>
          <span className="d">
            5. Upload proof of payment through the chat button on home page
          </span>
          <button className="pay__title" onClick={handlePay}>
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Transfer