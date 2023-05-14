import styled from "styled-components";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

import "./Dashboard.css";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Sidenav from "./Sidenav";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="Dashboard">
        <Sidenav />
        {/* <div className="Content">
        <Outlet />
      </div> */}
      </div>
    </>
  );
};

export default Dashboard;
