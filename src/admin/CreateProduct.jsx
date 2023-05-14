import { useState } from "react";
// import { useDispatch} from "react-redux";
import styled from "styled-components";
import { PrimaryButton } from "./CommonStyled";
// import { addProduct } from "../redux/apiRedux";

import Input from "../components/Input";
import SelectInput from "../components/SelectInput";
import SelectStock from "../components/SelectStock";
import SelectSize from "../components/SelectSize";
import { toast } from "react-hot-toast";
import useAxiosPrivate from "../hooks/useAxios";
import Navbar from "../components/Navbar";
import Sidenav from "./Sidenav";
import "./CreateProduct.css";

const CreateProduct = () => {
  const axiosPrivate = useAxiosPrivate();
  const [productImg, setProductImg] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discprice, setDiscPrice] = useState("");
  const [colors, setColors] = useState("");
  const [categories, setCategories] = useState("");
  const [size, setSize] = useState("");
  const [moq, setMoq] = useState("");
  const [instock, setInStock] = useState("");

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
      discprice,
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
    e.preventDefault();
    const refreshToastnotify = toast.loading("Loading...");
    createPdt();
    toast.success("uploaded successfully", { id: refreshToastnotify });
    setProductImg("");
    setCategories("");
    setColors("");
    setDescription("");
    setPrice("");
    setSize("");
    setInStock("");
  };

  return (
    <div className="main__container">
      <Navbar />
      <div className="create__product">
        {/* Sidebar */}
        <div className="create__productSidenav">
          <Sidenav />
        </div>
        <div className="create__productcontainer">
          {/* Form */}
          <div className="create__form">
            <StyledForm onSubmit={handleSubmit} encType="multipart/form-data">
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
              <Input
                placeholder="discPrice"
                type="text"
                onChange={(e) => setDiscPrice(e.target.value)}
                value={discprice}
              />
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
            </StyledForm>
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
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;
  margin-left: 100px;

  select,
  input {
    padding: 4px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;

    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }

  select {
    color: rgb(95, 95, 95);
  }
`;

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
