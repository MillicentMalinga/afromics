import './App.css';
import { Route, Routes} from 'react-router-dom';
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Researchers from './pages/Researchers';
import Work from './components/Work'
import Profile from './pages/Profile'
import Datasets from './pages/Datasets';
import NewData from './pages/NewData';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import Organisations from './components/Organisations';

import Dashboard from './pages/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './pages/ForgotPassword';
import ProtectedRoute from './components/protectedRoute';
import NewBlog from './pages/NewBlog';
import BlogPost from './pages/BlogPost';
import BlogPosts from './pages/BlogPosts';
import NewProject from './pages/NewProject';
import { UserAuth } from './context/authContext';
import ProtectedNav from './components/ProtectedNav';
import CustomNav from './components/CustomNav';
import Dataset from './pages/Dataset';

function App() {
  const {user} = UserAuth();

 
  return (
    <div className='bg-gray-50 overflow-x-hidden'>
      {
        user ? <ProtectedNav /> : <CustomNav />
      }

 
    <Routes>
    <Route path="/" element={<Landing/>} />
    <Route path="/login" element={<SignIn/>} />
  
    <Route path="/register" element={< SignUp />} />
    <Route path='/courses' element={<Courses />} />
    <Route path="/organisations" element={<Organisations />} />
  
  
    <Route path="/datasets" element={<Datasets />} />
 <Route path="forgot-password" element={<ForgotPassword />} />
    <Route path="/dashboard" element={<Dashboard />} />

    <Route path="/researchers" element={<ProtectedRoute><Researchers /></ProtectedRoute>} />
    <Route path="/work/:userId" element={<ProtectedRoute><Work /></ProtectedRoute>} />
    <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
    <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
    <Route path="/datasets" element={<ProtectedRoute><Datasets /></ProtectedRoute>} />
    <Route path="/datasets/new" element={<ProtectedRoute><NewData /></ProtectedRoute>} />
    <Route path="/projects/new" element={<ProtectedRoute><NewProject /></ProtectedRoute>} />
    <Route path="/blogs/new" element={<ProtectedRoute><NewBlog /></ProtectedRoute>} />
    <Route path="/blogs" element={<ProtectedRoute><BlogPosts /></ProtectedRoute>} />
    <Route path="/blogs/:postId" element={<ProtectedRoute><BlogPost /></ProtectedRoute>} />
    <Route path="/datasets/:dataId" element={<ProtectedRoute><Dataset /></ProtectedRoute>} />

    
    
    </Routes>
    
<ToastContainer />
    
    </div>
  );
}

export default App;
