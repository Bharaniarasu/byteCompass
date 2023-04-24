import React from "react";
import UserData from "../ui/card/userData";
import Card from "../ui/card";
import "./navbar.scss";
const NavBar = () => {
  return (
    <nav className="navbar p-0 ">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-12">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <a href="/" className="nav-link align-middle px-0">
                  <i className="fs-4 fa fa-font-awesome"></i>
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </a>
              </li>

              <li>
                <a href="/" className="nav-link px-0 align-middle">
                  <i className="fs-4 fa fa-briefcase"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Jobs</span>
                </a>
              </li>
              <li>
                <a
                  href="/submenu2"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle "
                >
                  <i className="fs-4 fa fa-user"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Candidates</span>
                </a>
              </li>
              <li>
                <a
                  href="/submenu3"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 fa fa-calendar"></i>{" "}
                  <span className="ms-1 d-none d-sm-inline">Interviews</span>{" "}
                </a>
              </li>

              <li>
                <a
                  href="/submenu1"
                  data-bs-toggle="collapse"
                  className="nav-link px-0 "
                >
                  <i className="fs-4 fa fa-gears"></i>{" "}
                  <span className=" d-none d-sm-inline">Settings</span>{" "}
                </a>
                <ul
                  className="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="/menu"
                >
                  <li className="w-100">
                    <a href="/" className="nav-link px-0">
                      {" "}
                      <span className="ms-4 d-none d-sm-inline">
                        Your Profile
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" className="nav-link px-0">
                      {" "}
                      <span className="ms-4 d-none d-sm-inline">
                        Company Info
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/userList" className="nav-link px-0">
                      {" "}
                      <span className="ms-4 d-none d-sm-inline">
                        Users
                      </span>{" "}
                    </a>
                  </li>
                  <li>
                    <a href="/" className="nav-link px-0">
                      {" "}
                      <span className="ms-4 d-none d-sm-inline">
                        Logout
                      </span>{" "}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
