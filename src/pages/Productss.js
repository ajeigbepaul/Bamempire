import React, { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import FilterColor from "../components/FilterColor";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import "./Productss.css";
import QuantityContainer from "../components/QuantityContainer";
import { useLocation } from 'react-router-dom'
import { publicRequest } from "../requestMethods";
import {useDispatch} from "react-redux"
import {addCart} from "../redux/cartRedux"
// toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
// moment(new Date(row.time)).format("YYYY-MM-DD")}

//Paul take note. implimentation of the discount into the total price
//STEPS--
// ADD THE DISCOUNT FIELD TO THE MODEL
// ADD IT TO THE DISPATCH CALL
// SUB FROM THE PRICE IN THE CARTREDUX
// FINISHED
function Productss() {
  const dispatch = useDispatch()
  const location  = useLocation()
  const id = location.pathname.split("/")[2]

  const [product, setProduct] = useState({})
  const [otherimages, setOtherimages] = useState([])
  const [images, setImages] = useState([])


  const [qty, setQty]= useState(1)

  useEffect(()=>{
   const getProduct = async()=>{
    try {
      const res = await publicRequest.get(`/products/${id}`)
      setProduct(res.data)
      
    } catch (error) {
      
    }
   }
   getProduct()
  },[id])
  useEffect(()=>{
    const getOtherimages = async()=>{
     try {
       const res = await publicRequest.get(`/images`)
      //  console.log(res.data)
       setOtherimages(res.data)
       
     } catch (error) {
       
     }
    }
    getOtherimages()
   },[id])

   // FILTER OTHERIMAGES
  useEffect(() => {
      setImages(
        otherimages.filter((image) => id === image?.productid)
      );
  }, [id,otherimages]);
  console.log(images)

  // HANDLE ADD TO CART
  const handleAddToCart = () =>{
   dispatch(addCart({...product,qty})) 
  }
  // {otherimages.map(images=>)}
  return (
    <div className="productss__container">
      <Announcement />
      <Navbar />
      <div className="productss__wrapper">
        <div className="productss__prodimg">
          <img src={product?.image?.url} alt="prod" />
          {images?.map(image=>
          <div className="productss__otherimages">
          {/* {console.log(image.images)} */}
           <h2>Other product images</h2>
          {image?.images?.map(item=><img key={item._id} src={item?.url} alt="otherimages"/>)}
          </div>)}
         
          
        </div>
        <div className="productss__infocontainer">
          <div className="productss__title">
          {product.instock === "yes"?<span>instock</span>:<span>sold out</span> }

            {/* <h2>{product.title}</h2> */}
          </div>
          <div className="productss__desc">
            <p>
              {product.description}
            </p>
          </div>
          <div className="productss__desc">
            <p>
             (Minimum Order Quantity:{product.moq}) 
            </p>
          </div>
          <div className="productss__price">
            <span>
              ₦ {product.price?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
            </span>
          </div>
          <div className="productfilter__container">
            <div className="productfilter">
              <h2>Colors</h2>
              <div className="filter__color">
                <FilterColor color={product.colors} />
              </div>
            </div>
            <div className="productfilter">
              <h2>Size</h2>
              <div className="selectprodsize">
                {product.size}
              </div>
            </div>
          </div>
          <div className="productaddContainer">
            <QuantityContainer qty={qty} setQty={setQty}/>
            <div className="addToCart" onClick={handleAddToCart}>ADD TO CART</div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Productss;
