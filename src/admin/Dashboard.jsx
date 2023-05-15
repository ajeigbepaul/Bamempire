import styled from "styled-components";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

import "./Dashboard.css";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Sidenav from "./Sidenav";
import useAuth from "../hooks/useAuth";
import { FaTimes, FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import MobileSideNav from "./MobileSidenav";
const Dashboard = () => {
  const {totalProducts,totalUsers} = useAuth()
  const [toggle, setToggle] = useState(false);
  console.log(totalProducts)
  console.log(totalUsers)
  useEffect(()=>{})
  return (
    <>
      <Navbar />

      <div className="Dashboard">
        <div className="dashboard__sidenav">
          <div className="close" onClick={() => setToggle((prev) => !prev)}>
            <FaTimes /> <span>Menu</span>
          </div>
          <Sidenav />
          {toggle && <MobileSideNav />}
        </div>

        <div className="Content">
          <h2>Dashboard</h2>
          <div className="content__inner">
            <div className="content__user">
              <FaUser size={60} />
              <div className="content__info mx-3">
                <span className="totuser">Total Users</span>
                <h2>{totalUsers}</h2>
              </div>
            </div>
            <div className="content__prod">
              <FaUser size={60} />
              <div className="content__info mx-3">
                <span className="totuser">Total Products</span>
                <h2>{totalProducts}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
