import React, { useState, useEffect } from "react";
import "./Products.css";
import Product from "./Product";
import axios from "axios";


function Products({ filtercolors, filtersize, sort, cat }) {
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        // const res = await axios.get(
        //   cat
        //     ? `https://bamempirebackend-production.up.railway.app/products?category=${cat}`
        //     : "https://bamempirebackend-production.up.railway.app/products"
        // );
        const res = await axios.get(
          cat
            ? `http://localhost:8000/products?category=${cat}`
            : `http://localhost:8000/products`
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [cat]);
  // FILTER PRODUCTS COLORS
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) => filtercolors === item?.colors)
      );
  }, [cat, filtercolors, products]);
 // FILTER PRODUCT SIZE
  useEffect(() => {
    cat &&
      setFilteredProducts([...products],products.filter((item) => filtersize === item?.size));
  }, [cat, filtersize, products]);
  // SORT PRODUCT
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts([...products], products.sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === "asc") {
      setFilteredProducts([...products], products.sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts([...products], products.sort((a, b) => b.price - a.price)
      );
    }
  }, [cat,sort,products]);
 
  return (
    <div className="products">
      <h2>Popular Product</h2>
      <div className="products__product">
        {cat
          ? filteredproducts?.map((item) => (
              <Product key={item.id} product={item} />
            ))
          : products
              .slice(0, 15)
              ?.map((item) => <Product key={item.id} product={item} />)}
      </div>
    </div>
  );
}

export default Products;
