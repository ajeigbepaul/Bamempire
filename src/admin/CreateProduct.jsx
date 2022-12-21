import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { PrimaryButton } from "./CommonStyled";
import { addProduct } from "../redux/apiRedux";
import Input from "../components/Input";
import SelectInput from "../components/SelectInput";
import SelectStock from "../components/SelectStock";
import SelectSize from "../components/SelectSize";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const dispatch = useDispatch();
  // const { createStatus } = useSelector((state) => state.products);

  const [productImg, setProductImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [colors, setColors] = useState("");
  const [categories, setCategories] = useState("");
  const [size, setSize] = useState("");
  const [stock, setStock] = useState("");
  // const [discount, setDiscount] = useState("");
  
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

  const handleSubmit = async (e) => {
    e.preventDefault();
     addProduct({
        title,
        description,
        price,
        colors,
        categories,
        size,
        stock,
        // discount,
        image: productImg,
      }, dispatch)
      setProductImg("");
      setCategories("");
      setColors("")
      setDescription("")
      setPrice("")
      setSize("")
      setStock("")
      setTitle("")
      toast.success("product added successfully")
  };

  return (
    <StyledCreateProduct>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Create a Product</h3>
        <input
          id="imgUpload"
          accept="image/*"
          type="file"
          onChange={handleProductImageUpload}
          required
        />
        <Input placeholder="Title" type="text" onChange={(e) => setTitle(e.target.value)} value={title}/>
        <Input placeholder="Description" type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
        <Input placeholder="Price" type="text" onChange={(e) => setPrice(e.target.value)} value={price}/>
        <Input placeholder="Colors" type="text" onChange={(e) => setColors(e.target.value)} value={colors}/>
        <SelectInput onChange={(e) => setCategories(e.target.value)} value={categories}/>
        <SelectSize onChange={(e) => setSize(e.target.value)} value={size}/>
        <SelectStock onChange={(e) => setStock(e.target.value)} value={stock}/>
        {/* <Input placeholder="Discount" type="text" onChange={(e) => setDiscount(e.target.value)} /> */}
        <PrimaryButton type="submit">
          Creat product
          {/* {createStatus === "pending" ? "Submitting" : "Submit"} */}
        </PrimaryButton>
      </StyledForm>
      <ImagePreview>
        {productImg ? (
          <>
            <img src={productImg} alt="error!" />
          </>
        ) : (
          <p>Product image upload preview will appear here!</p>
        )}
      </ImagePreview>
    </StyledCreateProduct>
  );
};

export default CreateProduct;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;

  select,
  input {
    padding: 7px;
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

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
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
