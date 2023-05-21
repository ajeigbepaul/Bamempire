import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxios";
import "./AllProducts.css";
import moment from "moment"
// import {toast} from "react-toastify"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import ReactPaginate from "react-paginate";
import { FaCheck, FaTimes } from "react-icons/fa";
export default function AllProducts() {
  const axiosPrivate = useAxiosPrivate();
  const { setTotalProducts } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
 const [updatedStatus, setUpdatedStatus] = useState([]);
  const [PerItem, setPerItem] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  //   Start for Pagination
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const offset = currentPage * Number(PerItem);
  const currentItem = products.slice(offset, offset + Number(PerItem));
  const pageCount = Math.ceil(products.length / Number(PerItem));
  const fetchProducts = async () => {
    const response = await axiosPrivate.get("products");
    return response.data;
  };

  useEffect(() => {
    const fetchInitialProducts = async () => {
      const initialProducts = await fetchProducts();
      setProducts(initialProducts);
    };

    fetchInitialProducts();

    // Cleanup: Unsubscribe from any subscriptions or clear any resources
    return () => {
      // ...
    };
  }, []);
  setTotalProducts(products?.length);
  const handleDelete = async (id) => {
    alert("do you want to delete this product?");
    try {
      const refreshToastnotify = toast.loading("Loading...");
      await axiosPrivate.delete(`/products/${id}`);
      toast.success("deleted successfully.", {
        id: refreshToastnotify,
      });
      // Fetch the updated products after the deletion is done
      const updatedProducts = await fetchProducts();
      setProducts(updatedProducts);
    } catch (error) {
      toast.error("something went wrong!");
    }
  };
  const handleStockStatus = async (id) => {
    try {
      const refreshToastnotify = toast.loading("Loading...");

      // Update the stock status of the product on the server
      await axiosPrivate.put(`/products/${id}`, { instock: "no" });

      // Update the stock status in the local state immediately
      setProducts((prevProducts) =>
        prevProducts.map((product) => {
          if (product.id === id) {
            return { ...product, instock: "no" };
          }
          return product;
        })
      );
      toast.success("Status updated to not in stock!", {
        id: refreshToastnotify,
      });
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
 

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">ALL Products</h3>

      <span className="goback" onClick={() => navigate(-1)}>
        Go Back
      </span>

      <h3 className="widgetLgTotalqty">Stock Quantity:{products.length}</h3>
      
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>S/N</th>
                <th>ProductImg</th>
                <th>ProductID</th>
                <th>Desc</th>
                <th>createdAt</th>
                <th>Action</th>
                <th>Uploads</th>
                <th>inStock</th>
              </tr>
            </thead>
            <tbody>
              {currentItem.length > 0 ? (
                currentItem?.map((product, i) => {
                  return (
                    <tr key={product._id}>
                      <td>{i + 1 + currentPage * PerItem}</td>
                      <td className="widgetLgImg">
                        <img src={product?.image?.url} alt="productimages" />
                      </td>
                      <td className="widgetLgDate">{product._id}</td>
                      <td className="widgetLgDesc">{product.description}</td>
                      <td className="widgetLgDate">
                        {moment(new Date(product.createdAt)).format(
                          "YYYY-MM-DD"
                        )}
                      </td>
                      <td className="widgetLgStatus">
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="btn"
                        >
                          Delete
                        </button>
                      </td>
                      <td className="widgetLgStatus">
                        <Link to={`/images/${product._id}`}>
                          <button
                            type="submit"
                            onClick={() => console.log("")}
                            className="btn2"
                          >
                            more images
                          </button>
                        </Link>
                      </td>
                      <td className="widgetLgStatus">
                        <button
                          type="submit"
                          onClick={() => handleStockStatus(product._id)}
                          className="btn3"
                        >
                          inStock?
                          <span className="instc">
                            {updatedStatus.includes(product.id)
                              ? "No"
                              : product.instock}
                          </span>
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
  );
}
