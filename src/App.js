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
import Datasets from './components/Datasets';
import NewData from './components/NewData';
import ProtectedRoute from './components/protectedRoute';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Organisations from './components/Organisations';
function App() {
 
  return (
    <div className='bg-blue-gray-50'>

 
    <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/login" element={<SignIn/>} />
    <Route path='/about' component={< About />} />
    <Route path="/register" element={< SignUp />} />
    <Route path='/courses' element={<Courses />} />
    <Route path="/organisations" element={<Organisations />} />
    
    <Route path="/researchers" element={<ProtectedRoute><Researchers /></ProtectedRoute>} />
    <Route path="/work" element={<ProtectedRoute><Work /></ProtectedRoute>} />
    <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
    <Route path="/datasets" element={<ProtectedRoute><Datasets /></ProtectedRoute>} />
    <Route path="/datasets/new" element={<ProtectedRoute><NewData /></ProtectedRoute>} />
    
   


    
    </Routes>
    </div>
  );
}

export default App;
