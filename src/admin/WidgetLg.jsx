import { useEffect, useState } from "react";
// import { userRequest } from "../requestMethods";
import useAxiosPrivate from "../hooks/useAxios";
import "./widgetLg.css";
import moment from "moment";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { FaCheck } from "react-icons/fa";

export default function WidgetLg() {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState({
    processing: "processing",
    packed: "packed",
    delivered: "delivered",
  });
  const [updatedStatus, setUpdatedStatus] = useState({});
  const [updatedPacked, setUpdatedPacked] = useState({});
  const [updatedDelivered, setUpdatedDelivered] = useState({});
  // const [disableButton, setDisableButton] = useState(false);
  const [PerItem, setPerItem] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  //   Start for Pagination
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const offset = currentPage * Number(PerItem);
  const currentItem = orders.slice(offset, offset + Number(PerItem));
  const pageCount = Math.ceil(orders.length / Number(PerItem));
  //End of Pagination

  const fetchOrders = async () => {
    const response = await axiosPrivate.get("ordermes");
    return response.data;
  };

  useEffect(() => {
    const fetchInitialOrders = async () => {
      const initialOrders = await fetchOrders();
      setOrders(initialOrders);
    };

    fetchInitialOrders();

    // Cleanup: Unsubscribe from any subscriptions or clear any resources
    return () => {
      // ...
    };
  }, [axiosPrivate]);
  console.log(orders)
  const handleDelete = async (orderNumber) => {
  
    const check = prompt(`do you want to delete this order?${orderNumber} YES or NO`);
    if(check){

      try {
        const refreshToastnotify = toast.loading("Loading...");
        await axiosPrivate.delete(
          `/ordermes/order/${orderNumber}`
        );
        toast.success("deleted successfully.", {
          id: refreshToastnotify,
        });
        // Fetch the updated products after the deletion is done
        const updatedOrders = await fetchOrders();
        setOrders(updatedOrders);
        toast.dismiss(refreshToastnotify);
      } catch (error) {
        toast.error("something went wrong!");
        toast.dismiss();
      }
    }
  };
  
 useEffect(() => {
   // Retrieve the updated status from localStorage
   const storedStatus = localStorage.getItem("updatedStatus");
   const storedPackedS = localStorage.getItem("updatedPackedStatus");
   const delivered = localStorage.getItem("updatedDeliveredStatus");
   if (storedStatus) {
     setUpdatedStatus(JSON.parse(storedStatus));
   }
   if (storedPackedS) {
     setUpdatedPacked(JSON.parse(storedPackedS));
   }
    if (delivered) {
      setUpdatedPacked(JSON.parse(delivered));
    }
   
 }, []);
  const handleStatusProcessing = async (id) => {
    try {
      // ... your existing code ...
      const res = await axiosPrivate.put(`/ordermes/${id}`, {
        status: "processing",
      });
      setStatus(res.data);
      setUpdatedStatus((prevStatus) => ({
        ...prevStatus,
        [id]: "Processing Done",
      }));
      toast.success("Status updated!!");
      console.log(id);
      // setDisableButton(true);
      // Persist the updated status in localStorage
      // Persist the updated status in localStorage
      localStorage.setItem(
        "updatedStatus",
        JSON.stringify({
          ...updatedStatus,
          [id]: "Processing Done",
        })
      );
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  // Similar changes for handleStatusPacked and handleStatusDelivered

  const handleStatusPacked = async (id) => {
    try {
      const res = await axiosPrivate.put(`/ordermes/${id}`, {
        status: "packed",
      });

      setStatus(res.data);
      setUpdatedPacked((prevStatus) => ({ ...prevStatus, [id]: "Pack Done" }));
      toast.success("Status updated!!");
      console.log(updatedPacked)
      console.log(id);
      // setDisableButton(true);
      // Persist the updated status in localStorage
      localStorage.setItem(
        "updatedPackedStatus",
        JSON.stringify({
          ...updatedPacked,
          [id]: "Pack Done",
        })
      );
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const handleStatusDelivered = async (id) => {
    try {
      const res = await axiosPrivate.put(`/ordermes/${id}`, {
        status: "delivered",
      });

      setStatus(res.data);
      setUpdatedDelivered((prevStatus) => ({ ...prevStatus, [id]: "Delivery Done" }));
      toast.success("Status updated!!");
      // Persist the updated status in localStorage
      console.log(id)
      localStorage.setItem(
        "updatedDeliveredStatus",
        JSON.stringify({
          ...updatedDelivered,
          [id]: "Delivery Done",
        })
      );
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };
  return (
    <>
      <div className="widgetLg">
        <h3 className="widgetLgTitle">ALL ORDERS</h3>
        <span className="goback" onClick={() => navigate(-1)}>
          Go Back
        </span>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>OrderId</th>
                  <th>Name</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Phone Nos</th>
                  <th>Address</th>
                  <th>Date</th>
                  <th className="text-end">Action</th>
                </tr>
              </thead>
              <tbody>
                {console.log(orders)}
                {currentItem.length > 0 ? (
                  currentItem?.map((item, i) => {
                    return (
                      <tr key={item._id}>
                        <td>{i + 1 + currentPage * PerItem}</td>
                        <td>{item.orderNumber}</td>
                        <td>{item?.address?.fullname}</td>
                        <td className="items">
                          {item.products.map((order, i) => (
                            <div key={i} className="widgetLgitem">
                              <span>{order.description} </span>
                              <span>{order.qty} Qty</span>
                            </div>
                          ))}
                        </td>
                        <td>₦{item.total}.00</td>
                        <td>{item.status}</td>
                        <td>{item.address?.phone}</td>
                        <td>{item.address?.address1}</td>
                        <td>
                          {moment(new Date(item.createdAt)).format(
                            "YYYY-MM-DD"
                          )}
                        </td>
                        <td className="text-end btnwhite">
                          <Link to={`/order/${item?._id}`}
                            className="btn btn-sm rounded font-sm btn6 mx-1"
                          >
                            View
                          </Link>
                          <button
                            onClick={() => handleDelete(item?.orderNumber)}
                            className="btn btn-sm rounded font-sm btn5 mx-1"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => handleStatusProcessing(item._id)}
                            className={`btn btn-sm rounded font-sm btn2 mx-1`}
                            // disabled={disableButton}
                          >
                            {" "}
                            {/* Processing */}
                            {updatedStatus[item._id] || "Processing"}
                          </button>
                          <button
                            onClick={() => handleStatusPacked(item._id)}
                            className="btn btn-sm rounded font-sm btn3 mx-1"
                          >
                            {updatedPacked[item._id] || "Packed"}
                          </button>
                          <button
                            onClick={() => handleStatusDelivered(item._id)}
                            className="btn btn-sm rounded font-sm mx-1 bg-warning"
                          >
                            {updatedDelivered[item._id] || "Delivered"}
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5}>No data found!</td>
                  </tr>
                )}
                {status === "success" && orders.length === 0 && (
                  <h6 className="text-center">No Orders in this category</h6>
                )}
              </tbody>
            </table>
          </div>
          {/* <!-- table-responsive //end --> */}
        </div>
        {/* <!-- card-body end// --> */}
        <div className="row">
          <div className="col-md-5 col-sm-12 col-lg-5">
            <div className="row g-3  mt-10 mb-40 align-items-center">
              <div className="col-auto">
                <label htmlFor="select" className="col-form-label">
                  Showing
                </label>
              </div>
              <div className="col-auto">
                <select
                  value={PerItem}
                  onChange={(e) => setPerItem(e.target.value)}
                  id="select"
                  aria-label="form-select-sm"
                  className="form-select form-select-sm"
                >
                  <option disabled value="">
                    --Select--
                  </option>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="100">100</option>
                </select>
              </div>
              <div className="col-auto"> of {currentItem.length} entries</div>
            </div>
          </div>
          <div className="col-md-7 col-sm-12 col-lg-5 justify-content-end">
            <div className="pagination-area mt-30 mb-50 ">
              <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
