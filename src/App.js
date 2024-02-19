import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import Product from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/productdetails' element={<ProductDetails />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
