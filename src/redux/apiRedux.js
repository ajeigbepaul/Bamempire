import { loginFailure, loginStart, loginSuccess, registerStart, registerSuccess, registerFailure } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";
import { addCart} from "./cartRedux";
import {payStart, paySuccess, payFailure} from "./payRedux";
import {orderStart, orderSuccess, orderFailure} from "./orderRedux";
import {imagesStart, imagesSuccess, imagesFailure} from "./imagesRedux"


export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const adminlogin = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/adminlogin", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err));
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};


// CART
export const addcart = async (dispatch, user) => {
  dispatch(addCart());
  try {
    const res = await publicRequest.post("/carts/addproduct", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

// PAY
export const pay = async (dispatch, pay) => {
  dispatch(payStart());
  try {
    const res = await userRequest.post("/payments/pay", pay);
    dispatch(paySuccess(res.data));
  } catch (err) {
    dispatch(payFailure());
  }
};


// ORDER
export const order = async (dispatch, orders) => {
  dispatch(orderStart());
  try {
    const res = await userRequest.post("/orders/order", orders);
    dispatch(orderSuccess(res.data));
  } catch (err) {
    dispatch(orderFailure());
  }
};

// IMAGES
export const images = async (dispatch, images) => {
  dispatch(imagesStart());
  try {
    const res = await userRequest.post("/uploads", images);
    dispatch(imagesSuccess(res.data));
  } catch (err) {
    dispatch(imagesFailure());
  }
};

// CHANGE STATUS
export const updateStatus = async (dispatch, id, status) => {
  dispatch(orderStart());
  try {
    const res = await userRequest.put("/orders/:id", id, status);
    dispatch(orderSuccess(res.data));
  } catch (err) {
    dispatch(orderFailure());
  }
};
// REMOVE CART
// CART
export const removecart = async (dispatch, id) => {
  dispatch(addCart());
  try {
    const res = await publicRequest.post("/carts/:id", id);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};


export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // update
    dispatch(updateProductSuccess({ id, product }));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products/add`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};
