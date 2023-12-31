import React, { useState } from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../CSS/sign.css"

const SignUpForm = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [age, setage] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlefirstnameChange = (e) => {
    setfirstname(e.target.value);
  };
  const handlelastnameChange = (e) => {
    setlastname(e.target.value);
  };
  const handleemailChange = (e) => {
    setemail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleageChange = (e) => {
    setage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
    email:email,
    age: age,
    firstname: firstname,
    lastname: lastname, 
    password: password,
    };
    axios.post('http://localhost:8080/api/signup', user)
      .then((response) => {
        console.log(response.data);
        window.alert('User registered successfully!');
      })
      .catch((error) => {
        console.error("Email alreay exists");
        window.alert('Email alreay exists');
      });

    
  };

  return (
    <body className="align">

  <div className="grid">
            <AccountCircleRoundedIcon  className="icon23"style={{ fontSize: '100px',color: 'whitesmoke' }}/>
        <p className="box231">
            Sign Up 
        </p>
  <form className="form login" onSubmit={handleSubmit}>
        
      <div className="form__field">
        <input autocomplete="firstname" id="login__firstname" type="text" name="Firstname" value={firstname} onChange={handlefirstnameChange} className="form__input" placeholder="Firstname" required>
      </input>
      </div>
      <div class="form__field">
        <input autocomplete="lastname" id="login__lastname" type="text" value={lastname} onChange={handlelastnameChange} name="Firstname" className="form__input" placeholder="Lastname" required>
      </input>
      </div>
      <div class="form__field">
        <input autocomplete="username" id="login__username" type="text" value={email} onChange={handleemailChange} name="Firstname" className="form__input" placeholder="Email" required>
      </input>
      </div>
      <div class="form__field">
        <input autocomplete="username" id="login__username" type="text" value={age} onChange={handleageChange} name="Firstname" className="form__input" placeholder="Age" required>
      </input>

      </div>
      <div classNAme="form__field">
        <input id="login__password" type="password" name="password" value={password} onChange={handlePasswordChange} className="form__input" placeholder="Password" required>
            </input>
      </div>

      <div className="form__field">
        <input type="submit" value="Sign Up">
        </input>
      </div>

    </form>

    <p className="text--center">Already a member? <a href="#"><Link to="/">Sign in now</Link></a> <svg className="icon">
        
      </svg></p>

  </div>

  <svg xmlns="http://www.w3.org/2000/svg" className="icons">
    <symbol id="icon-arrow-right" viewBox="0 0 1792 1792">
      <path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" />
    </symbol>
    <symbol id="icon-lock" viewBox="0 0 1792 1792">
      <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" />
    </symbol>
    <symbol id="icon-user" viewBox="0 0 1792 1792">
      <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z" />
    </symbol>
  </svg>
</body>
  );
};

export default SignUpForm;
{/* <form onSubmit={handleSubmit}>
      <label>
        Firstname:
        <input type="text" value={firstname} onChange={handlefirstnameChange} />
      </label>
      <label>
        Lastname:
        <input type="text" value={lastname} onChange={handlelastnameChange} />
      </label>
      <label>
        Email:
        <input type="text" value={email} onChange={handleemailChange} />
      </label>
      <label>
        Age:
        <input type="text" value={age} onChange={handleageChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Sign Up</button>
    </form> */}