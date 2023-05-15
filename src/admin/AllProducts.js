import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxios";
import "./AllProducts.css";
import moment from "moment"
// import {toast} from "react-toastify"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import ReactPaginate from "react-paginate";
export default function AllProducts() {
  const axiosPrivate = useAxiosPrivate();
  const { setTotalProducts } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("yes");
  const [PerItem, setPerItem] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  //   Start for Pagination
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const offset = currentPage * Number(PerItem);
  const currentItem = products.slice(offset, offset + Number(PerItem));
  const pageCount = Math.ceil(products.length / Number(PerItem));
  //End of Pagination
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axiosPrivate.get("products");
        // console.log(res.data)
        setProducts(res.data);
      } catch {}
    };
    getProducts();
  }, [axiosPrivate]);
  setTotalProducts(products?.length);
  // useEffect(() => {
  //   const getImg = async () => {
  //     try {
  //       const res = await userRequest.get(`/images/${}`);
  //       // console.log(res.data)
  //       setProducts(res.data);
  //     } catch {}
  //   };
  //   getProducts();
  // }, []);
  const handleDelete = async (id) => {
    alert("do you want to delete this product?");
    try {
      const refreshToastnotify = toast.loading("Loading...");
      await axiosPrivate.delete(`/products/${id}`);
      toast.success("deleted successfully.", {
        id: refreshToastnotify,
      });
      // Update the UI by removing the deleted item from the state
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      toast.error("something went wrong!");
    }
  };
  const handleStockstatus = async (id) => {
    try {
      const refreshToastnotify = toast.loading("Loading...");
      const res = await axiosPrivate.put(`/products/${id}`, { instock: "no" });
      //  console.log(res.data)
      setStatus(status == "No");
      toast.success("Status updated to not in stock!!", {
        id: refreshToastnotify,
      });
    } catch (error) {}
    // console.log(id)
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">ALL Products</h3>

      <span className="goback" onClick={() => navigate(-1)}>
        Go Back
      </span>

      <h3 className="widgetLgTotalqty">Stock Quantity:{products.length}</h3>
      {/* <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">S/N</th>
          <th className="widgetLgTh">ProductImg</th>
          <th className="widgetLgTh">ProductID</th>
          <th className="widgetLgTh">Desc</th>
          <th className="widgetLgTh">createdAt</th>
          <th className="widgetLgTh">Action</th>
          <th className="widgetLgTh">Uploads</th>
          <th className="widgetLgTh">inStock</th>
        </tr>
        {products.map((product, i) => (
          <tr className="widgetLgTr" key={product._id}>
            <td className="widgetLgDate">{i + 1}</td>
            <td className="widgetLgImg">
              <img src={product?.image?.url} alt="productimages" />
            </td>
            <td className="widgetLgDate">{product._id}</td>
            <td className="widgetLgDesc">{product.description}</td>
            <td className="widgetLgDate">
              {moment(new Date(product.createdAt)).format("YYYY-MM-DD")}
            </td>
            <td className="widgetLgStatus">
              <button onClick={() => handleDelete(product._id)} className="btn">
                Delete
              </button>
            </td>
            <td className="widgetLgStatus">
              <Link to={`/admin/images/${product._id}`}>
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
                onClick={() => handleStockstatus(product._id)}
                className="btn3"
              >
                inStock?
                <span className="instc">
                  {(status && product.instock) == "yes"
                    ? "yes"
                    : (status && product.instock) == "no" ? 'no' : 'No status'}
                </span>
              </button>
            </td>
          </tr>
        ))}
      </table> */}
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-hover">
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
                {/* <th className="text-end">Action</th> */}
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
                        <Link to={`/admin/images/${product._id}`}>
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
                          onClick={() => handleStockstatus(product._id)}
                          className="btn3"
                        >
                          inStock?
                          <span className="instc">
                            {(status && product.instock) == "yes"
                              ? "yes"
                              : (status && product.instock) == "no"
                              ? "no"
                              : "No status"}
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
