import { useEffect, useState } from "react";
// import { userRequest } from "../requestMethods";
import useAxiosPrivate from "../hooks/useAxios";
import "./widgetLg.css";
import moment from "moment";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

export default function WidgetLg() {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState({
    processing: "processing",
    packed: "packed",
    delivered: "delivered",
  });
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
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axiosPrivate.get("ordermes");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, [axiosPrivate]);
  const handleDelete = async (id) => {
    alert("do you want to delete this order");
    try {
      await axiosPrivate.delete(`/ordermes/${id}`);
      // Update the UI by removing the deleted item from the state
      setOrders(orders.filter((order) => order.id !== id));
    } catch (error) {}
    toast.success("Order done and deleted!! Kindly refresh your browser.");
  };

  const handleStatusprocessing = async (id) => {
    try {
      const res = await axiosPrivate.put(`/ordermes/${id}`, {
        status: status.processing,
      });
      setStatus(res.data);
      toast.success("Status updated!! Kindly refresh your browser.");
    } catch (error) {}
  };
  const handleStatuspacked = async (id) => {
    try {
      const res = await axiosPrivate.put(`/ordermes/${id}`, {
        status: status.packed,
      });
      //  console.log(res.data)
      setStatus(res.data);
      toast.success("Status updated!! Kindly refresh your browser.");
    } catch (error) {}
    // console.log(id)
  };
  const handleStatusdelivered = async (id) => {
    try {
      const res = await axiosPrivate.put(`/ordermes/${id}`, {
        status: status.delivered,
      });
      //  console.log(res.data)
      setStatus(res.data);
      toast.success("Status updated!! Kindly refresh your browser.");
    } catch (error) {}
    // console.log(id)
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
                {currentItem.length > 0 ? (
                  currentItem?.map((item, i) => {
                    return (
                      <tr key={item._id}>
                        <td>{i + 1 + currentPage * PerItem}</td>
                        <td>
                          {item.products.map((order, i) => (
                            <div key={i} className="widgetLgitem">
                              <h6>{order._id} </h6>
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
                          <button
                            onClick={() => handleDelete(item._id)}
                            className="btn btn-sm rounded font-sm btn5 mx-1"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => handleStatusprocessing(item._id)}
                            className="btn btn-sm rounded font-sm btn2 mx-1"
                          >
                            Processing
                          </button>
                          <button
                            onClick={() => handleStatuspacked(item._id)}
                            className="btn btn-sm rounded font-sm btn3 mx-1"
                          >
                            packed
                          </button>
                          <button
                            onClick={() => handleStatusdelivered(item._id)}
                            className="btn btn-sm rounded font-sm mx-1 bg-warning"
                          >
                            Delivered
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
