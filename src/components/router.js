import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from './navbar';
import SignInForm from './signin';
import SignUpForm from './signup';
  
class Routi extends Component {
  render() {
    return (
       <Router>
           <Routes>
                 <Route exact path='/' element={< SignInForm />}></Route>
                 <Route exact path='/SignUp' element={< SignUpForm />}></Route>
                 <Route exact path='/navbar' element={< Navbar />}></Route>
          </Routes>
       </Router>
   );
  }
}
  
export default Routi;