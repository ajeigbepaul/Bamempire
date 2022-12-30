import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import "./widgetLg.css";
import moment from "moment"
import {toast} from "react-toastify"
export default function WidgetLg() {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState({processing:"processing", packed:"packed", delivered:"delivered"})
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        // console.log(res.data)
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
  const handleDelete = async(id) => {
    alert("do you want to delete this order")
    try {
      await userRequest.delete(`/orders/${id}`)
    } catch (error) {
      
    }
    toast.success("Order done and deleted!! Kindly refresh your browser.")
  };
  const handleStatusprocessing = async(id)=>{
    try {
     const res = await userRequest.put(`/orders/${id}`,{status:status.processing})
    //  console.log(res.data)
     setStatus(res.data)
     toast.success("Status updated!! Kindly refresh your browser.")
    } catch (error) {
      
    }
    // console.log(id)
  }
  const handleStatuspacked = async(id)=>{
    try {
     const res = await userRequest.put(`/orders/${id}`,{status:status.packed})
    //  console.log(res.data)
     setStatus(res.data)
     toast.success("Status updated!! Kindly refresh your browser.")
    } catch (error) {
      
    }
    // console.log(id)
  }
  const handleStatusdelivered = async(id)=>{
    try {
     const res = await userRequest.put(`/orders/${id}`,{status:status.delivered})
    //  console.log(res.data)
     setStatus(res.data)
     toast.success("Status updated!! Kindly refresh your browser.")
    } catch (error) {
      
    }
    // console.log(id)
  } 
  return (
    
    <div className="widgetLg">
      <h3 className="widgetLgTitle">ALL ORDERS</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
           <th className="widgetLgTh">Customer</th>
           {/* <th className="widgetLgTh">OrderID</th> */}
           <th className="widgetLgTh">Phone nos</th>
           <th className="widgetLgTh">Address</th>
           <th className="widgetLgTh">State</th>
           <th className="widgetLgTh">Date</th>
           <th className="widgetLgTh">Products Id/Qty</th>
           <th className="widgetLgTh">Total</th>
           <th className="widgetLgTh">status</th>
           <th className="widgetLgTh">Action</th>
           <th className="widgetLgTh">Update status</th>
        </tr>
        {orders.map((order) => (
          <tr className="widgetLgTr" key={order._id}>
            <td className="widgetLgName">{order.address.fullname}</td>
            {/* <td className="widgetLgId">{order._id}</td> */}
            <td className="widgetLgDate">{order.address.phone}</td>
            <td className="widgetLgDate">{order.address.address1}</td>
            <td className="widgetLgDate">{order.address.state}</td>
            <td className="widgetLgDate">{moment(new Date(order.createdAt)).format("YYYY-MM-DD")}</td>
            <td className="widgetLgProduct">{order.products.map((item,i)=><div key={i} className="widgetLgitem"><h6>{item._id} </h6><span>{item.qty} Qty</span></div>)}</td>
            <td className="widgetLgAmount">N{order.total}</td>
            <td className="widgetLgStatus"><Button type={order.status} /></td>
            <td className="widgetLgStatus">
              <button onClick={() => handleDelete(order._id)}>Sold</button>
            </td>
            <td className="widgetLgStatus">
              <form>
              <button type="submit" onClick={()=>handleStatusprocessing(order._id)} className="btn" >processing</button>
              <button type="submit" onClick={()=>handleStatuspacked(order._id)} className="btn2" >packed</button>
              <button type="submit" onClick={()=>handleStatusdelivered(order._id)} className="btn3" >dispatched</button>
              </form>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
