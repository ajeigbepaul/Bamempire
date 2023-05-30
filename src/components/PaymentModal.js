import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdClose } from "react-icons/md";
import './Payment.css'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from "../hooks/useAxios";
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
     const { auth, setOrderId, orderId } = useAuth();
     const userId = auth?.id;
     const [order, setOrder] = useState([]);
     useEffect(() => {
       const getOrders = async () => {
         try {
           const res = await axiosPrivate.get(`ordermes/${userId}`);
           setOrder(res.data);
         } catch {}
       };
       getOrders();
     }, [userId]);
  return (
    <Modal show={show}>
      <Modal.Header className={headerClass}>
        <Modal.Title>
          {/* style={{ fontWeight: "600" }} */}
          {order.map((orderid, i) => (
            <>
              
              {setOrderId(orderid.orderNumber)}
            </>
          ))}
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
            <p>
              Account Name: <span className="acct__det">Ajeigbe o. Paul</span>
            </p>
            <p>GTB bank</p>
            <p>
              Account Number: <span className="acct__det">0125305454</span>
            </p>
          </div>
          <div className="payment__instruct">
            <h2 className="order__h">ORDER-ID : {orderId} </h2>
            <h2 className="pay__h">Please follow this instructions</h2>
            <span className="d">1. Copy the account number</span>
            <span className="d">
              2. User the ORDER-ID as reference during payment
            </span>
            <span className="d">3. Make your payment</span>
            <span className="d">4. Click on done</span>
            <span className="d">5. Click on finished</span>
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
