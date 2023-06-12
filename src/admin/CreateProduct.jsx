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
import ColorInput from "../components/ColorInput";
import SizeInput from "../components/SizeInput";

const CreateProduct = () => {
  const axiosPrivate = useAxiosPrivate();
  const [productImg, setProductImg] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [availableqty, setAvailableQty] = useState("");
  // const [discount, setDiscount] = useState("");
  const [colors, setColors] = useState([]);
  const [newColor, setNewColor] = useState("");
  const [categories, setCategories] = useState("");
  const [size, setSize] = useState("");
  const [moq, setMoq] = useState("");
  const [instock, setInStock] = useState("");
  const [toggle, setToggle] = useState(false);
  const [newSize, setNewSize] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);

  // const handleOptionChange = (event) => {
  //   const optionValue = event.target.value;
  //   if (event.target.checked) {
  //     setSelectedSizes((prevSelectedOptions) => [
  //       ...prevSelectedOptions,
  //       optionValue,
  //     ]);
  //   } else {
  //     setSelectedSizes((prevSelectedOptions) =>
  //       prevSelectedOptions.filter((option) => option !== optionValue)
  //     );
  //   }
  // };

  const handleAddColor = () => {
    if (newColor.trim() !== "") {
      setColors([...colors, newColor]);
      setNewColor("");
    }
  };

  const handleAddSize = () => {
    if (newSize.trim() !== "") {
      setSelectedSizes([...selectedSizes, newSize]);
      setNewSize("");
    }
  };

  const handleRemoveSize = (index) => {
    const updatedSizes = [...selectedSizes];
    updatedSizes.splice(index, 1);
    setSelectedSizes(updatedSizes);
  };

  const handleRemoveColor = (index) => {
    const updatedColors = [...colors];
    updatedColors.splice(index, 1);
    setColors(updatedColors);
  };

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
      availableqty,
      // discount,
      colors,
      categories,
      size,
      selectedSizes,
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
      setColors([]);
      setNewColor("");
      setDescription("");
      setPrice("");
      setAvailableQty("");
      // setDiscount("");
      setSize("");
      setSelectedSizes([]);
      setInStock("");
      setMoq("");
    } catch (error) {
      toast.error(error);
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
              <Input
                placeholder="AvailableQty"
                type="text"
                onChange={(e) => setAvailableQty(e.target.value)}
                value={availableqty}
              />
              <ColorInput
                placeholder="Colors"
                type="text"
                onChange={(e) => setNewColor(e.target.value)}
                value={newColor}
                colors={colors}
                handleAddColor={handleAddColor}
                handleRemoveColor={handleRemoveColor}
              />
              <Input
                placeholder="MOQ(Minimum Order Quantity"
                type="text"
                onChange={(e) => setMoq(e.target.value)}
                value={moq}
              />
              {/* <SelectSize onChange={handleSelectChange} value={selectedSizes} selectedSizes={selectedSizes} /> */}
              <SelectInput
                onChange={(e) => setCategories(e.target.value)}
                value={categories}
              />
              <SelectStock
                onChange={(e) => setInStock(e.target.value)}
                value={instock}
              />
              <SizeInput
                placeholder="Sizes"
                type="text"
                onChange={(e) => setNewSize(e.target.value)}
                value={newSize}
                selectedSizes={selectedSizes}
                handleAddSize={handleAddSize}
                handleRemoveSize={handleRemoveSize}
              />
              {/* <div className="bg-white">Size Chart</div>
              <div className="col-md-12 col-sm-12 d-flex bg-success flex-wrap">
                <label className="d-flex align-items-center mx-2">
                  <input
                    type="checkbox"
                    value="S"
                    checked={selectedSizes.includes("S")}
                    onChange={handleOptionChange}
                  />
                  S
                </label>

                <label className="d-flex align-items-center mx-2">
                  <input
                    type="checkbox"
                    value="M"
                    checked={selectedSizes.includes("M")}
                    onChange={handleOptionChange}
                  />
                  M
                </label>

                <label className="d-flex align-items-center mx-2">
                  <input
                    type="checkbox"
                    value="L"
                    checked={selectedSizes.includes("L")}
                    onChange={handleOptionChange}
                  />
                  L
                </label>

                <label className="d-flex align-items-center mx-2">
                  <input
                    type="checkbox"
                    value="XL"
                    checked={selectedSizes.includes("XL")}
                    onChange={handleOptionChange}
                  />
                  XL
                </label>
                <label className="d-flex align-items-center mx-2">
                  <input
                    type="checkbox"
                    value="XXL"
                    checked={selectedSizes.includes("XXL")}
                    onChange={handleOptionChange}
                  />
                  XXL
                </label>
                <label className="d-flex align-items-center mx-2">
                  <input
                    type="checkbox"
                    value="25-30"
                    checked={selectedSizes.includes("25-30")}
                    onChange={handleOptionChange}
                  />
                  25-30
                </label>
                <label className="d-flex align-items-center mx-2">
                  <input
                    type="checkbox"
                    value="31-36"
                    checked={selectedSizes.includes("31-36")}
                    onChange={handleOptionChange}
                  />
                  31-36
                </label>
                <label className="d-flex align-items-center mx-2">
                  <input
                    type="checkbox"
                    value="35-41"
                    checked={selectedSizes.includes("35-41")}
                    onChange={handleOptionChange}
                  />
                  35-41
                </label>
                <label className="d-flex align-items-center mx-2">
                  <input
                    type="checkbox"
                    value="37-42"
                    checked={selectedSizes.includes("37-42")}
                    onChange={handleOptionChange}
                  />
                  37-42
                </label>
                <label className="d-flex align-items-center mx-2">
                  <input
                    type="checkbox"
                    value="39-44"
                    checked={selectedSizes.includes("39-44")}
                    onChange={handleOptionChange}
                  />
                  39-44
                </label>
                <label className="d-flex align-items-center mx-2">
                  <input
                    type="checkbox"
                    value="40-47"
                    checked={selectedSizes.includes("40-47")}
                    onChange={handleOptionChange}
                  />
                  40-47
                </label>
                <label className="d-flex align-items-center mx-2">
                  <input
                    type="checkbox"
                    value="50-62"
                    checked={selectedSizes.includes("50-62")}
                    onChange={handleOptionChange}
                  />
                  50-62
                </label>
              </div> */}
              {/* <div className="bg-warning">
                Selected options: {selectedSizes.map((option) => `${option} `)}
              </div> */}
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
