import './App.css';
import ContactUs from './components/ContactUs';
import About from './components/About';
import { Route, Routes} from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Researchers from './components/Researchers';
import Work from './components/Work'
import Profile from './components/Profile'
function App() {
 
  return (
    <div className='bg-blue-gray-50'>

 
    <Routes>

    <Route path='/about' component={< About />} />
    <Route path="/researchers" element={<Researchers />} />
    <Route path="/register" element={< SignUp />} />
    <Route path="/" element={<Landing/>} />
    <Route path="/login" element={<SignIn/>} />
    <Route path="/work" element={<Work />} />
    <Route path="/profile" element={<Profile />} />

    
    </Routes>
    </div>
  );
}

export default App;
