import './App.css';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Products from './components/Products';
import CustomNav from './components/CustomNav';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Hero from './components/Hero';
import Researchers from './components/Researchers';
import Organisations from './components/Organisations';
import Landing from './pages/Landing';

function App() {
  <Router>
    <Route path='/contact' component={ContactUs} />
    <Route path='/about' component={About} />
    <Route path="/products" component={Products} />
    <Route path="/researchers" component={Researchers} />
    <Route path="/organisations" component={Organisations} /> 
    </Router>
  return (
    <div className="App overflow-x-hidden bg-blue-gray-50">
      <Landing />
   
        
    </div>
  );
}

export default App;
