import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidenav.css";
function Sidenav() {
  return (
    <div className="sideNav">
      <h3>Quick Links</h3>

      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/createproducts"
      >
        Add Products
      </NavLink>
     
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/neworders"
      >
        Orders
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/admin/allproducts"
      >
        All Products
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/newusers"
      >
        Users
      </NavLink>
    </div>
  );
}

export default Sidenav;
