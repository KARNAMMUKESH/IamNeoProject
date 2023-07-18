import React from 'react';
import { useState } from 'react';
import '../CSS/navbar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from './Redux/userslice';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


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
  const handleGroupPage = () => {
    navigate('/grouppage');
  };
  const handleContact = () => {
    navigate('/contact');
  };
  const handleProfile = () => {
    navigate('/profile');
  };
  const handlelogout = () => {
    navigate('/');
  };

  return (
    <nav className="navbar">
        <div className="navbar-icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <AccountCircleIcon style={{ fontSize: '35px',color: 'whitesmoke' }}/>
      </div>
      <div className="navuser-name">
      {user.name}
      </div>
      <div className="search-bar">
      <Box 
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '30ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
         id="filled-search"
          label="Search contact"
          type="search"
          variant="filled"
          color="secondary" focused 
          inputProps={{
            style: {
              height: "5px",
              color:'#ece5e5',
            },
          }}
        />
    </Box>
    </div>
    <div className="search-icon">
    <PersonSearchOutlinedIcon style={{ fontSize: '35px',color: 'whitesmoke' }}/>
    </div>
      <ul className="navbar-nav">
        <li className="nav-item" onClick={handleContact}>
          <a className="nav-link">Contacts</a>
        </li>
        <li className="nav-item" onClick={handleGroupPage}>
          <a className="nav-link">Groups</a>
        </li>
        <li className="nav-item" onClick={handleAddContact}>
          <a className="nav-link"> ADD Contact</a>
        </li>
      </ul>
      {isSidebarVisible && (
        <div className="sidebar" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <ul className="sidebar-nav">
            <li className="sidebar-item" onClick={handleProfile}>
              <a className="sidebar-link">
                Your Profile
              </a>
            </li>
            <li className="sidebar-item">
              <a className="sidebar-link">
                Help
              </a>
            </li>
            <li className="sidebar-item" onClick={handlelogout}>
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