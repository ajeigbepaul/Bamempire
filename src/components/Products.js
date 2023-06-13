import React, { useState, useEffect } from "react";
import "./Products.css";
import Product from "./Product";
import axios from "axios";
import { motion } from "framer-motion";
import MoonLoader from "react-spinners/MoonLoader";

function Products({ filtercolors, filtersize, sort, cat }) {
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const override = {
    display: "block",
    margin: "0 auto",
    // borderColor: "red",
  };
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      try {
        const res = await axios.get(
          
          cat
            ? `${process.env.REACT_APP_BASE_URL}/products?category=${cat}`
            : `${process.env.REACT_APP_BASE_URL}/products`
        );
        setProducts(res.data);
        setLoading(false)
      } catch (error) {}
    };
    getProduct();
  }, [cat]);
  // console.log(products)
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
      setFilteredProducts(products.filter((item) => filtersize === item?.size));
    if (filtersize === "All") {
      setFilteredProducts(products);
    }
  }, [cat, filtersize, products]);
  // SORT PRODUCT
  // useEffect(() => {
  //   if (sort === "newest") {
  //     setFilteredProducts(
  //       products.sort(
  //         (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
  //       )
  //     );
  //   } else if (sort === "asc") {
  //     setFilteredProducts(products.sort((a, b) => a.price - b.price));
  //   } else {
  //     setFilteredProducts(products.sort((a, b) => b.price - a.price));
  //   }
  // }, [cat, sort, products]);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(
        products.sort(
          (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
        )
      );
    } else if (sort === "asc") {
      setFilteredProducts(products.sort((a, b) => a.price - b.price));
    } else if (sort === "desc") {
      setFilteredProducts(products.sort((a, b) => b.price - a.price));
    }
  }, [cat, sort, products]);
  // console.log(products)
  return (
    <div className="products">
      <motion.h2
        initial={{
          opacity: 0,
          y: -200,
        }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        // animate={{}}
      >
        All Products
      </motion.h2>
      <MoonLoader
        loading={loading}
        size={50}
        color="#eed961"
        aria-label="Loading Spinner"
        data-testid="loader"
        cssOverride={override}
      />
      <div className="products__product">
        {cat
          ? filteredproducts?.map((item) => (
              <Product key={item._id} product={item} />
            ))
          : products
              .slice(0, 72)
              ?.map((item) => <Product key={item._id} product={item} />)}
      </div>
    </div>
  );
}

export default Products;
