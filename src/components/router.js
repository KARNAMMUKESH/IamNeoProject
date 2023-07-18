import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Navbar from './navbar';
import SignInForm from './signin';
import SignUpForm from './signup';
import AddContactForm from './addcontacts';
import GroupPage from './group';
import ContactPage from './contact';
import ProfilePage from './yourprofile';
import Home from './landinghome';
  
class Routi extends Component {
  render() {
    return (
       <Router>
           <Routes>
           <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/signin' element={< SignInForm />}></Route>
                 <Route exact path='/SignUp' element={< SignUpForm />}></Route>
                 <Route exact path='/navbar' element={< Navbar />}></Route>
                 <Route exact path='/addContact' element={< AddContactForm />}></Route>
                 <Route exact path='/grouppage' element={< GroupPage />}></Route>
                 <Route exact path='/contact' element={< ContactPage />}></Route>
                 <Route exact path='/profile' element={< ProfilePage />}></Route>

          </Routes>
       </Router>
   );
  }
}
  
export default Routi;