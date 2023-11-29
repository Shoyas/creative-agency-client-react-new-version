import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../../assets/images/logos/logo.png";
import { AuthContext } from "../../../Providers/AuthProviders";

const Sidebar = () => {
  const [loggedInUser] = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch("https://creative-agency-server-2tl0.onrender.com/getAdmin", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="sidebar-content">
      <div className="logo-container">
        <Link to="/home">
          <img className="logo-img" src={logo} alt="" />
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/dashboard">
          <h5>
            <span className="icon-style">
              <i className="pi pi-align-justify"></i>
            </span>
            <span className="dashboard">Dashboard</span>
          </h5>
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/dashboard/order">
          <h5>
            <span className="icon-style">
              <i className="pi pi-cart-plus"></i>
            </span>
            <span className="dashboard">Order</span>
          </h5>
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/dashboard/serviceList">
          <h5>
            <span className="icon-style">
              <span className="pi pi-list"></span>
            </span>
            <span className="dashboard">Service list</span>
          </h5>
        </Link>
      </div>
      <div className="menu-item">
        <Link to="/dashboard/review">
          <h5>
            <span className="icon-style">
              <span className="pi pi-comment"></span>
            </span>
            <span className="dashboard">Review</span>
          </h5>
        </Link>
      </div>
      {isAdmin && (
        <div>
          <div className="menu-item">
            <Link to="/dashboard/allServicesList">
              <h5>
                <span className="icon-style">
                  <span className="pi pi-list"></span>
                </span>
                <span className="dashboard">All Service list</span>
              </h5>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/dashboard/addService">
              <h5>
                <span className="icon-style">
                  <span className="pi pi-plus"></span>
                </span>
                <span className="dashboard">Add Service</span>
              </h5>
            </Link>
          </div>
          <div className="menu-item">
            <Link to="/dashboard/makeAdmin">
              <h5>
                <span className="icon-style">
                  <span className="pi pi-user"></span>
                </span>
                <span className="dashboard">Make Admin</span>{" "}
              </h5>
            </Link>
          </div>
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Sidebar;
