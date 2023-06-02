import React, { useEffect, useState } from "react";
import "./Tracking.css";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import useAxiosPrivate from "../hooks/useAxios";
import moment from "moment";
import useAuth from "../hooks/useAuth";
const Tracking = () => {
  const axiosPrivate = useAxiosPrivate()
  const {auth} = useAuth()
  const userId = auth?.id

  const [orders, setOrders] = useState([]);
  // const Button = ({ type }) => {
  //   return <button className={"widgetLgButton " + type}>{type}</button>;
  // };
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axiosPrivate.get(`ordermes/${userId}`);
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, [userId, axiosPrivate]);
  console.log(orders)
  return (
    <>
      <Announcement />
      <Navbar />
      <div className="widgetLg">
        <h3 className="widgetLgTitle">TRACK YOUR ORDERS</h3>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>OrderId</th>
                  <th>Description/QTY</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders?.map((order, i) => {
                    return (
                      <tr key={order._id}>
                        <td>{i + 1}</td>
                        <td>{order.orderNumber}</td>
                        <td className="prod__items">
                          {order.products.map((item, i) => (
                            <div key={i} className="widgetLgitem">
                              <span>{item.description} </span>
                              <span>{item.qty} Qty</span>
                            </div>
                          ))}
                        </td>
                        <td>
                          <button className="btn btn-sm track__status">
                            {order.status}
                          </button>
                        </td>
                        <td>
                          {moment(new Date(order.createdAt)).format(
                            "YYYY-MM-DD"
                          )}
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5}>No data found!</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* <!-- table-responsive //end --> */}
        </div>
        {/* <!-- card-body end// --> */}
        
      </div>
    </>
  );
};

export default Tracking;
