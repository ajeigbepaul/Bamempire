import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Dashboard.css"

const Dashboard = () => {
  
  return (
    <div className="Dashboard">
      <div className="sideNav">
        <h3>Quick Links</h3>
        {/* <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/summary"
        >
          Summary
        </NavLink> */}
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/neworders"
        >
          Orders
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/newusers"
        >
          Users
        </NavLink>
      </div>
      <div className="Content">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
