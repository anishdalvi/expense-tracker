import React from 'react'
//import './dashboard.css'
import {Helmet} from "react-helmet";

export default function Dashboard() {

  

  return (
    <>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta charSet="utf-8" />
          <Helmet>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
          </Helmet>
          
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
          />
          {/* 【fontawesome】 */}
          <link
            href="https://use.fontawesome.com/releases/v5.0.6/css/all.css"
            rel="stylesheet"
          />
     
          
         
          <div className="page-wrapper chiller-theme toggled">
            <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
              <i className="fas fa-bars" />
            </a>
            {/* Button  */}
            <nav id="sidebar" className="sidebar-wrapper">
              <div className="sidebar-content">
                <div className="sidebar-brand">
                  <a href="#">pro sidebar</a>
                  <div id="close-sidebar">
                    <i className="fas fa-times" />
                  </div>
                </div>
                {/* sidebar-brand */}
                <div className="sidebar-header">
                  <div className="user-pic" style={{ color: "#fff" }}>
                    <i className="fa fa-user-circle fa-4x" aria-hidden="true" />
                  </div>
                  <div className="user-info">
                    <span className="user-name">
                      {" "}
                      <strong>Joe Chien</strong>
                    </span>
                    <span className="user-role">Administrator</span>
                    <span className="user-status">
                      <i className="fa fa-circle" /> <span>Online</span>
                    </span>
                  </div>
                </div>
                {/* sidebar-header */}
                <div className="sidebar-search">
                  <div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control search-menu"
                        placeholder="Search..."
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="fa fa-search" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* sidebar-search */}
                <div className="sidebar-menu">
                  <ul>
                    <li className="header-menu">
                      <span>General</span>
                    </li>
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="fa fa-tachometer-alt" />
                        <span>Dashboard</span>
                        <span className="badge badge-pill badge-warning">New</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">
                              Dashboard 1{" "}
                              <span className="badge badge-pill badge-success">
                                Pro
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">Dashboard 2</a>
                          </li>
                          <li>
                            <a href="#">Dashboard 3</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* Dashboard */}
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="fa fa-shopping-cart" />
                        <span>E-commerce</span>
                        <span className="badge badge-pill badge-danger">3</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">
                              Products <span>Pro</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">Orders</a>
                          </li>
                          <li>
                            <a href="#">Credit cart</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* E-commerce */}
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="far fa-gem" />
                        <span>Components</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">General</a>
                          </li>
                          <li>
                            <a href="#">Panels</a>
                          </li>
                          <li>
                            <a href="#">Tables</a>
                          </li>
                          <li>
                            <a href="#">Icons</a>
                          </li>
                          <li>
                            <a href="#">Forms</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* Components */}
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="fa fa-chart-line" />
                        <span>Charts</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">Pie chart</a>
                          </li>
                          <li>
                            <a href="#">Line chart</a>
                          </li>
                          <li>
                            <a href="#">Bar chart</a>
                          </li>
                          <li>
                            <a href="#">Histogram</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* Charts */}
                    <li className="sidebar-dropdown">
                      <a href="#">
                        <i className="fa fa-globe" />
                        <span>Maps</span>
                      </a>
                      <div className="sidebar-submenu">
                        <ul>
                          <li>
                            <a href="#">Google maps</a>
                          </li>
                          <li>
                            <a href="#">Open street map</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    {/* Maps */}
                    <li className="header-menu">
                      <span>Extra</span>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-book" />
                        <span>Documentation</span>
                        <span className="badge badge-pill badge-primary">Beta</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-calendar" />
                        <span>Calendar</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-folder" />
                        <span>Examples</span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* sidebar-menu  */}
              </div>
              {/* sidebar-content  */}
              <div className="sidebar-footer">
                <a href="#">
                  <i className="fa fa-bell" />
                  <span className="badge badge-pill badge-warning notification">3</span>
                </a>
                <a href="#">
                  <i className="fa fa-envelope" />
                  <span className="badge badge-pill badge-success notification">7</span>
                </a>
                <a href="#">
                  <i className="fa fa-cog" />
                  <span className="badge-sonar" />
                </a>
                <a href="#">
                  <i className="fa fa-power-off" />
                </a>
              </div>
              {/* sidebar-footer  */}
            </nav>
            {/* sidebar-wrapper  */}
            <main className="page-content">
              <div className="container-fluid">
                <h2>Pro Sidebar</h2>
                <hr />
              </div>
            </main>
            {/* page-content" */}
          </div>
          {/* page-wrapper" */}
        </>

  )
}
