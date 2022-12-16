import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import "./widgetLg.css";
import {format} from "timeago.js"
import { toast } from "react-toastify";

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        console.log(res.data)
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  // const Button = ({ type }) => {
  //   return <button className={"widgetLgButton " + type}>{type}</button>;
  // };
  
  const handleDelete = async(id) => {
    alert("do you want to delete this order")
    try {
      await userRequest.delete(`/orders/${id}`)
    } catch (error) {
      
    }
    toast.success("Order done and deleted!! Kindly refresh your browser.")
  };
 
  return (
    
    <div className="widgetLg">
      <h3 className="widgetLgTitle">ALL ORDERS</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Email</th>
           <th className="widgetLgTh">Phone nos</th>
           <th className="widgetLgTh">Address</th>
           <th className="widgetLgTh">State</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Products</th>
          <th className="widgetLgTh">Total</th>
          <th className="widgetLgTh">Action</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            {/* <td className="widgetLgUser">
              <span className="widgetLgName">{order.address.fullname}</span>
            </td> */}
            <td className="widgetLgName">{order.address.fullname}</td>
            <td className="widgetLgDate">{order.address.email}</td>
            <td className="widgetLgDate">{order.address.phone}</td>
            <td className="widgetLgDate">{order.address.address1}</td>
            <td className="widgetLgDate">{order.address.state}</td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
            <td className="widgetLgProduct">{order.products.map((item,i)=><div key={i} className="widgetLgitem"><h6>{item.title} </h6><h6>{item.colors} </h6><h6>{item.size} </h6><span>{item.qty} Qty</span></div>)}</td>
            <td className="widgetLgAmount">N{order.total}</td>
            <td className="widgetLgStatus">
              <button onClick={() => handleDelete(order._id)}>Sold</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
