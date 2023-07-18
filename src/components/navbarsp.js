import React from "react";
import "../CSS/navbarsp.css";
// import logo from "./logo.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
 import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavbarSP(){
   
    const [isSidebarVisible, setSidebarVisibility] = useState(false);

  const handleMouseEnter = () => {
    setSidebarVisibility(true);
  };

  const handleMouseLeave = () => {
    setSidebarVisibility(false);
  };
    return(
        <div className="navback">
        <nav className="nav">
            <a href="/" className="sitename">
            <img className="logo"/>
            </a>
            <ul className="navul">
                <li className="nav-items">
                    <a href="/home">HOME</a>
                </li>
                <li>
                    <a href="/about">ABOUT US</a>
                </li>
                <li>
                    <a>CONTACT US</a>
                </li>
            </ul>
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <AccountCircleIcon style={{fontSize:"50px",marginright: "-60px"}}/>
              </div>
            <div>
              User_Name
            </div>
            {isSidebarVisible && (
        <div className="sidebar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ul className="sidebar-nav">
            <li className="sidebar-item">
              <a className="sidebar-link">
                Your Profile
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                Help
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                Logout
                <div  className="logouticon" >
                <LogoutIcon style={{ fontSize: '15px',color: 'whitesmoke' }}/>
                </div>
              </a>
            </li>
          </ul>
        </div>
            )}
        </nav>
        </div>
    );
}