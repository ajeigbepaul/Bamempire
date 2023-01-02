import React, { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import {useSelector} from "react-redux"
import "./Tracking.css";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
const Tracking = () => {
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
  const currentUser = user && JSON.parse(user).currentUser;
  // const {order} = useSelector((state) => state?.order);
  const userId = currentUser?._id
  // const userId = order?.userId
  console.log(userId)

  const [orders, setOrders] = useState([]);
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get(`orders/${userId}`);
        console.log(res.data);
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, [userId]);
  return (
    <>
    <Announcement/>
    <Navbar/>
    <div className="widgetLg">
      <h3 className="widgetLgTitle">TRACK YOUR ORDERS</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          {/* <th className="widgetLgTh">Customer</th> */}
          {/* <th className="widgetLgTh">Products</th> */}
          <th className="widgetLgTh">ProductsID</th>
          <th className="widgetLgTh">status</th>
        </tr>
        {orders?.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            {/* <td className="widgetLgName">{order.address.fullname}</td> */}
            <td className="widgetLgProduct">
              {order.products.map((item, i) => (
                <div key={i} className="widgetLgitem">
                  <h6>{item._id} </h6>
                  <span>{item.qty} Qty</span>
                </div>
              ))}
            </td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
    </>
      
  );
};

export default Tracking;
