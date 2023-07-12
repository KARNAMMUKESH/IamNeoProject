import React from 'react';
import { useState } from 'react';
import '../CSS/navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from './Redux/userslice';

function Navbar() {
     const user=useSelector(selectUser);
    const [isSidebarVisible, setSidebarVisibility] = useState(false);
    const navigate = useNavigate();

  const handleMouseEnter = () => {
    setSidebarVisibility(true);
  };

  const handleMouseLeave = () => {
    setSidebarVisibility(false);
  };
  const handleAddContact = () => {
    navigate('/addContact');
  };

  return (
    <nav className="navbar">
        <div className="navbar-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <AccountCircleIcon style={{ fontSize: '35px',color: 'whitesmoke' }}/>
      </div>
      <div className="navuser-name">
      {user.name}
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link">Contacts</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Groups</a>
        </li>
        <li className="nav-item" onClick={handleAddContact}>
          <a className="nav-link"> ADD Contact</a>
        </li>
      </ul>
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
  );
}

export default Navbar;