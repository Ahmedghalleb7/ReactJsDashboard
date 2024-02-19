import React, { useState } from "react";
import { sidebarItems } from "../constant/constant";
import { Link } from "react-router-dom";
import { RiHomeHeartLine } from "react-icons/ri";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import sfectoria from "../assets/Logo.png"; // Ajout de guillemets autour du chemin relatif


function Sidebar({ toggle, setToggle }) {
  return (
    <div>

<CDBSidebar textColor="#fff" backgroundColor="#333" className="position-fixed"
      style={{height: "100%", zIndex: 3 }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="https://www.sfectoria.com/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            <img src={sfectoria} width={100} alt="" />
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="d-flex align-items-center" > <RiHomeHeartLine style={{fontSize:25}}/>
Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div style={{ padding: '20px 5px' }}>Sidebar Footer</div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};










      
      {/* <div>
        <div className="d-flex justify-content-between">
          <p>logo</p>
          <button className="btn btn-light " onClick={() => setToggle(true)}>
            X
          </button>
        </div> */}
        {/* {sidebarItems.map((item, i) => (
          //  (<div key={i} onClick={()=>{ navigate(item.path)}}>{item.name}</div>)
          <Link to={item.path} className="nav-link">
            {item.name}
          </Link>
        ))} */}
      {/* </div> */}

      {/* <div>
        <p>settings</p>
      </div> */}
    {/* </div>
  );
} */}

export default Sidebar;
