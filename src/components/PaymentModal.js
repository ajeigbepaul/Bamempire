import React, { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {selectTot} from "../slice/basketSlice";

import { MdClose } from "react-icons/md";
import './Payment.css'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from "../hooks/useAxios";
import { useSelector } from "react-redux";
function PaymentModal({
  message,
  modalTitle,
  headerClass,
  show,
  action,
  actionTitle,
  handleClose,
}) {
     const axiosPrivate = useAxiosPrivate();
     const { auth} = useAuth();
     const userId = auth?.id;
     const [order, setOrder] = useState([]);
     const total = useSelector(selectTot);
     const fetchOrderNumber = useCallback(async () => {
       try {
         const response = await axiosPrivate.get(`ordermes/${userId}`);
         // return response.data;
         setOrder(response.data);
       } catch (error) {
        console.log(error);
       }
     }, [userId,axiosPrivate]); 
     useEffect(() => {
      fetchOrderNumber()
     }, [userId,fetchOrderNumber]);
     const latestOrderNumber = order?.map(
       (orderItem) => orderItem?.orderNumber
     )[0];
  return (
    <Modal show={show}>
      <Modal.Header className={headerClass}>
        <Modal.Title>
          <h5 className="text-white">{modalTitle}</h5>
        </Modal.Title>
        <MdClose
          size={25}
          className="text-danger cursorP"
          onClick={() => handleClose()}
        />
      </Modal.Header>
      <Modal.Body>
        <div className="payment__instruction">
          <div className="payment__details">
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
            <h2 className="order__h">ORDER-ID : {latestOrderNumber} </h2>
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
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={action}>
          {actionTitle}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

PaymentModal.defaultProps = {
  modalTitle: "Account details",
  actionTitle: "Ok",
  cancelButton: "Cancel",
  headerClass: "bg-success",
};

export default PaymentModal;
