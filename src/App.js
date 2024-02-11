import './App.css';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Products from './components/Products';
import CustomNav from './components/CustomNav';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  <Router>
    <Route path='/contact' component={ContactUs} />
    <Route path='/about' component={About} />
    <Route path="/products" component={Products} />
    </Router>
  return (
    <div className="App overflow-x-hidden bg-blue-gray-50">
      <CustomNav />
      <Hero />
   
        
    </div>
  );
}

export default App;
