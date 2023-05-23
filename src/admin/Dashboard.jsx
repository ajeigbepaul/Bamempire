import "./Dashboard.css";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Sidenav from "./Sidenav";
import { FaTimes, FaUser, FaBars } from "react-icons/fa";
import { useEffect, useState, useCallback } from "react";
import MobileSideNav from "./MobileSidenav";
import useAxiosPrivate from "../hooks/useAxios";
const Dashboard = () => {
  const axiosPrivate = useAxiosPrivate()
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState([])
  const [users, setUsers]=useState([])
  // console.log(totalProducts)
  // console.log(totalUsers)
  const fetchProducts = useCallback(async()=>{
    try {
      const response = await axiosPrivate.get("products");
      // return response.data;
      setProducts(response.data);
    } catch (error) {
      toast.error(error)
    }
    
  },[axiosPrivate])     
  const fetchUsers = useCallback(async () => {
    try {
    const res = await axiosPrivate.get("users/?new=true");
    // console.log(res.data)
    setUsers(res.data);
  } catch (error) {toast.error(error);}},[axiosPrivate]);
  useEffect(()=>{
    fetchProducts();
    fetchUsers()
  },[fetchUsers,fetchProducts])
 
  return (
    <>
      <Navbar />

      <div className="Dashboard">
        <div className="dashboard__sidenav">
          <div className="close" onClick={() => setToggle((prev) => !prev)}>
            {toggle ? (
              <div>
                <FaTimes /> <span>Close</span>
              </div>
            ) : (
              <div>
                <FaBars /> <span>Menu</span>
              </div>
            )}
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
                <h2>{users?.length}</h2>
              </div>
            </div>
            <div className="content__prod">
              <FaUser size={60} />
              <div className="content__info mx-3">
                <span className="totuser">Total Products</span>
                <h2>{products?.length}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
