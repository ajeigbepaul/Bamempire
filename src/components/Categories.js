import React from "react";
import "./Categories.css";
import CategoryItem from "./CategoryItem";
import { CategoryData } from "../utils/CategoryData";

function Categories() {
  return (
    <div className="categories">
      {/* <h2>Categories</h2> */}
      <div className="categories__category">
        {CategoryData.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
