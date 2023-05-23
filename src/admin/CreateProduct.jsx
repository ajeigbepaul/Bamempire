import { useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "./CommonStyled";

import Input from "../components/Input";
import SelectInput from "../components/SelectInput";
import SelectStock from "../components/SelectStock";
import SelectSize from "../components/SelectSize";
import { toast } from "react-hot-toast";
import useAxiosPrivate from "../hooks/useAxios";
import Navbar from "../components/Navbar";
import Sidenav from "./Sidenav";
import "./CreateProduct.css";
import { FaTimes } from "react-icons/fa";
import MobileSideNav from "./MobileSidenav";


const CreateProduct = () => {
  const axiosPrivate = useAxiosPrivate();
  const [productImg, setProductImg] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  // const [discount, setDiscount] = useState("");
  const [colors, setColors] = useState("");
  const [categories, setCategories] = useState("");
  const [size, setSize] = useState("");
  const [moq, setMoq] = useState("");
  const [instock, setInStock] = useState("");
  const [toggle, setToggle] = useState(false)
  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFileData(file);
  };
  const TransformFileData = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };
  const createPdt = async () => {
    const response = await axiosPrivate.post("/products", {
      description,
      price,
      // discount,
      colors,
      categories,
      size,
      instock,
      moq,
      image: productImg,
    });
    
    const result = response.data;
    return result;
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const refreshToastnotify = toast.loading("Loading...");
      createPdt();
      toast.success("uploaded successfully", { id: refreshToastnotify });
      setProductImg("");
      setCategories("");
      setColors("");
      setDescription("");
      setPrice("");
      // setDiscount("");
      setSize("");
      setInStock("");
      setMoq("");
    } catch (error) {
      toast.error(error)
    }
    
  };

  return (
    <div className="main__container">
      <Navbar />
      <div className="create__product">
        {/* Sidebar */}
        <div className="create__productSidenav">
          <div className="close" onClick={() => setToggle((prev) => !prev)}>
            <FaTimes /> <span>Menu</span>
          </div>
          <Sidenav />
          {toggle && <MobileSideNav />}
        </div>
        <div className="create__productcontainer">
          {/* Form */}
          <div className="create__form">
            <form
              className="styledform"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <h3>Create a Product</h3>
              <input
                id="imgUpload"
                accept="image/*"
                type="file"
                onChange={handleProductImageUpload}
                required
              />
              <Input
                placeholder="Description"
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <Input
                placeholder="Price"
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              {/* <Input
                placeholder="discPrice"
                type="text"
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
              /> */}
              <Input
                placeholder="Colors"
                type="text"
                onChange={(e) => setColors(e.target.value)}
                value={colors}
              />
              <Input
                placeholder="MOQ(Minimum Order Quantity"
                type="text"
                onChange={(e) => setMoq(e.target.value)}
                value={moq}
              />
              <SelectSize
                onChange={(e) => setSize(e.target.value)}
                value={size}
              />
              <SelectInput
                onChange={(e) => setCategories(e.target.value)}
                value={categories}
              />
              <SelectStock
                onChange={(e) => setInStock(e.target.value)}
                value={instock}
              />
              <PrimaryButton type="submit">Creat product</PrimaryButton>
            </form>
          </div>
          <div className="create__preview">
            <ImagePreview>
              {productImg ? (
                <>
                  <img src={productImg} alt="error!" />
                </>
              ) : (
                <p>Product image upload preview will appear here!</p>
              )}
            </ImagePreview>
          </div>
          {/* Preview */}
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
const ImagePreview = styled.div`
  margin-top: 50px;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  border-radius: 15px;
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);

  img {
    max-width: 100%;
  }
`;
