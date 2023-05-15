import "./widgetSm.css";
import { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxios";

export default function WidgetSm() {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate()
  const { setTotalUsers } = useAuth();
  const [users, setUsers] = useState([]);
  const [PerItem, setPerItem] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  //   Start for Pagination
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const offset = currentPage * Number(PerItem);
  const currentItem = users.slice(offset, offset + Number(PerItem));
  const pageCount = Math.ceil(users.length / Number(PerItem));
  //End of Pagination
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axiosPrivate.get("users/?new=true");
        // console.log(res.data)
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, [axiosPrivate]);
   setTotalUsers(users?.length)
  return (
    <>
      <div className="widgetSm">
        <h3 className="widgetSmTitle">All Customers</h3>
        <span className="goback" onClick={() => navigate(-1)}>
          Go Back
        </span>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {currentItem.length > 0 ? (
                  currentItem?.map((item, i) => {
                    return (
                      <tr key={item._id}>
                        <td>{i + 1 + currentPage * PerItem}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>
                          {moment(new Date(item.createdAt)).format(
                            "YYYY-MM-DD"
                          )}
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
          <div className="col-md-7 col-sm-12 col-lg-5 justify-content-center">
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
