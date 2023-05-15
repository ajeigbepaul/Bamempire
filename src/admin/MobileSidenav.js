import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidenav.css";
function MobileSideNav() {
  return (
    <div className="mobilesideNav">
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
        to="/orders"
      >
        Orders
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/allproducts"
      >
        All Products
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/allusers"
      >
        Users
      </NavLink>
    </div>
  );
}

export default MobileSideNav;
