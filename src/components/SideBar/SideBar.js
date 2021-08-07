import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./SideBar.scss";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      className="sidebar-wrapper"
    >
      <CDBSidebar textColor="#fff" backgroundColor="#282830">
        <CDBSidebarHeader>
          {/* <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a> */}
          <span>LOGO</span>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">
                Profile Creation
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/myproject" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">My Project</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">
                Profile page
              </CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "30px",
              justifyContent: "space-between",
              alignItems: "center"
            }}
            className="d-flex"
          >
            <span className="mr-2 d-none d-md-block">John Henry</span>
            <i className="fas fa-sign-out-alt"></i>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
