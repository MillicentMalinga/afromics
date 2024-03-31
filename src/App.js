import './App.css';
import About from './components/About';
import { Route, Routes} from 'react-router-dom';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Researchers from './components/Researchers';
import Work from './components/Work'
import Profile from './pages/Profile'
import Datasets from './components/Datasets';
import NewData from './components/NewData';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Organisations from './components/Organisations';
import NewProject from './components/NewProject';
import ContactUs from './components/ContactUs';
import Dashboard from './pages/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/protectedRoute';

function App() {
 
  return (
    <div className='bg-blue-gray-50 overflow-x-hidden'>

 
    <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/login" element={<SignIn/>} />
    <Route path='/about' component={< About />} />
    <Route path="/register" element={< SignUp />} />
    <Route path='/courses' element={<Courses />} />
    <Route path="/organisations" element={<Organisations />} />
    <Route path="/contact" element={<ContactUs />} />
  
    <Route path="/datasets" element={<Datasets />} />
 
    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/researchers" element={<ProtectedRoute><Researchers /></ProtectedRoute>} />
    <Route path="/work" element={<ProtectedRoute><Work /></ProtectedRoute>} />
    <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
    <Route path="/datasets" element={<ProtectedRoute><Datasets /></ProtectedRoute>} />
    <Route path="/datasets/new" element={<ProtectedRoute><NewData /></ProtectedRoute>} />

    
    </Routes>
    
<ToastContainer />
    
    </div>
  );
}

export default App;
