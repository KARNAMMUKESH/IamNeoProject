import logo from './logo.svg';
import './App.css';
import SignUpForm from './components/signup';
import SignInForm from './components/signin';
import Navbar from './components/navbar';
import Routi from './components/router';
import Landing from './components/landinghome';
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
