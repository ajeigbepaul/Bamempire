import React, { useEffect, useState } from "react";
import "./OrderDetails.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxios";
import moment from "moment";
function OrderDetails() {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const id = pathname.substring(pathname.lastIndexOf("/") + 1);
  // const id = pathname.split("/").pop();
  // const { id } = location.state;
  console.log(id);
  const [order, setOrder] = useState({});
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axiosPrivate.get(`ordermes/${id}`);
        setOrder(res.data);
      } catch {}
    };
    getOrders();
  }, [id, axiosPrivate]);
  console.log(order);
  return (
    <div className="orderdetail__container">
      <Navbar />
      <div className="single__order">
        <span className="back" onClick={() => navigate(-1)}>
          Go Back
        </span>
        <h2>{order?.address?.fullname} Order</h2>
        <span>{order?.address?.email}</span>
        <span>{order?.address?.phone}</span>
        <div className="order__address">
          <span>Address</span>
          {order?.address?.address1 ? <span>
            {order?.address?.address1 +
              " " +
              order?.address?.city +
              " " +
              order?.address?.state}{" "}
          </span>:<span>
            No Address.It's PickUp
          </span> }
          
        </div>
        <div className="order__details">
          <span>OrderId: {order?.orderNumber}</span>
          <span>Status: {order?.status}</span>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table ">
              <thead>
                <tr>
                  <th>Product|Description|Qty|Price|Color|Size</th>
                  <th>Total</th>
                  <th>Special request</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {order?.products?.map((item) => (
                    <td className="prod__items">
                      <img
                        src={item?.image?.url}
                        alt="prod_image"
                        className="order__img"
                      />
                      <span>{item?.description}</span>
                      <span>{item?.qty}qty</span>
                      <span>
                        ₦
                        {item?.price?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                      </span>
                      <span>
                        {item?.selectedcolor ? item?.selectedcolor : "as seen"}
                      </span>
                      <span>{item?.size}</span>
                    </td>
                  ))}

                  <td>
                    ₦
                    {order?.total?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  </td>
                  <td>{order?.customize ? order?.customize : "None"}</td>
                  <td>
                    {moment(new Date(order.createdAt)).format("YYYY-MM-DD")}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- table-responsive //end --> */}
        </div>
        {/* <h2>ID:{id}</h2> */}
      </div>
      <Footer />
    </div>
  );
}

export default OrderDetails;
