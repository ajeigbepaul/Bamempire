import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import "./AllProducts.css";
import moment from "moment"
import {toast} from "react-toastify"
import { Link } from "react-router-dom";
export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [disable,setDisable] = useState(false)
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await userRequest.get("products");
        // console.log(res.data)
        setProducts(res.data);
      } catch {}
    };
    getProducts();
  }, []);
  // useEffect(() => {
  //   const getImg = async () => {
  //     try {
  //       const res = await userRequest.get(`/images/${}`);
  //       // console.log(res.data)
  //       setProducts(res.data);
  //     } catch {}
  //   };
  //   getProducts();
  // }, []);
  const handleDelete = async(id) => {
    alert("do you want to delete this product?")
    try {
      await userRequest.delete(`/products/${id}`)
    } catch (error) {
      
    }
    toast.success("Product deleted!! Kindly refresh your browser.")
  };
  const handleStockstatus = async(id)=>{
    try {
     const res = await userRequest.put(`/products/${id}`,{instock:"no"})
    //  console.log(res.data)
     toast.success("Status updated to not in stock!! Kindly refresh your browser.")
    } catch (error) {
      
    }
    // console.log(id)
  } 
  return (
    
    <div className="widgetLg">
      <h3 className="widgetLgTitle">ALL Products</h3>
      <h3 className="widgetLgTotalqty">Stock Quantity:{products.length}</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
           <th className="widgetLgTh">S/N</th>
           <th className="widgetLgTh">ProductImg</th>
           <th className="widgetLgTh">ProductID</th>
           <th className="widgetLgTh">Desc</th>
           <th className="widgetLgTh">createdAt</th>
           <th className="widgetLgTh">Action</th>
           <th className="widgetLgTh">Uploads</th>
           <th className="widgetLgTh">inStock</th>
        </tr>
        {products.map((product, i) => (
          <tr className="widgetLgTr" key={product._id}>
            <td className="widgetLgDate">{i++}</td>
            <td className="widgetLgImg"><img src={product.image.url} alt="productimages"/></td>
            <td className="widgetLgDate">{product._id}</td>
            <td className="widgetLgDesc">{product.description}</td>
            <td className="widgetLgDate">{moment(new Date(product.createdAt)).format("YYYY-MM-DD")}</td>
            <td className="widgetLgStatus">
              <button onClick={() => handleDelete(product._id)}>Delete</button>
            </td>
            <td className="widgetLgStatus">
              <Link to={`/admin/images/${product._id}`}><button type="submit" onClick={()=>console.log("")} className="btn" >uploads</button></Link>
            </td>
            <td className="widgetLgStatus">
              <button type="submit" onClick={()=>handleStockstatus(product._id)} className="btn3" >inStock?</button>
              <span>{product.instock}</span>
            </td>

          </tr>
        ))}
      </table>
    </div>
  );
}
