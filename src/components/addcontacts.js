import React, { useState } from 'react';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Navbar from './navbar';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import "../CSS/addcontact.css"

function AddContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data handling here
    // You can access the form data using the state variables (firstName, lastName, email, mobile, content)
  };

  return (
    <div>
      <Navbar/>
    <div className="centered-container">
    <form autoComplete="off" spellCheck="false" className="contact" onSubmit={handleSubmit}>
    <AccountCircleRoundedIcon className="user-icon" style={{ fontSize: '100px' }}/>
      <div className="contact-row">
        <div className="contact-col">
          <div className="contact-group">
            <input
              type="text"
              id="first-name"
              className="contact-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="first-name" className="contact-label">
              Name
            </label>
            <span className="contact-line"></span>
          </div>
        </div>
        <div className="contact-col">
          <div className="contact-group">
            <input
              type="text"
              id="last-name"
              className="contact-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label htmlFor="last-name" className="contact-label">
              Phone Number
            </label>
            <span className="contact-line"></span>
          </div>
        </div>
      </div>
      <div className="contact-row">
        <div className="contact-col">
          <div className="contact-group">
            <input
              type="email"
              id="email"
              className="contact-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email" className="contact-label">
              Email 
            </label>
            <span className="contact-line"></span>
          </div>
        </div>
        <div className="contact-col">
          <div className="contact-group">
            <input
              type="number"
              id="mobile"
              className="contact-input"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <label htmlFor="mobile" className="contact-label">
              Job
            </label>
            <span className="contact-line"></span>
          </div>
        </div>
      </div>
      <div className="contact-boxed">
        <textarea
          id="content"
          className="contact-input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <label htmlFor="content" className="contact-label">
          Address
        </label>
        <span className="contact-line"></span>
      </div>
      <button type="submit" className="contact-button">
        Add Contact
      </button>
    </form>
    </div>
    </div>
  );
}

export default AddContactForm;
