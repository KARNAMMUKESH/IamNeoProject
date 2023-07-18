import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/signup';
import SignInForm from './components/signin';
import Navbar from './components/navbar';
import Routi from './components/router';
import Home from './components/landinghome';
import NavbarSP from './components/navbarsp';
import Landing from './components/landinghome';
import ContactPage from './components/contact';
import AddContactForm from './components/addcontacts';
import ProfilePage from './components/yourprofile';
import GroupPage from './components/group';
// import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
// import { selectUser } from './components/Redux/userslice';
function App() {
  // const user=useSelector(selectUser);
  return (
    <div>
      <Routi/>
    </div>
  );
}

export default App;
