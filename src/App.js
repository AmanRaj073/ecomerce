import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./Components/Home"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Sidebar from "./Components/Sidebar"
import ProductDetails from './Pages/ProductDetails';
import ProductProvider from './Contexts/ProductContex';
import SidebarProvider from './Contexts/SidebarContext';
import CartProvider from './Contexts/CartContext';
function App() {

  return (
    <>
      <SidebarProvider>
        <CartProvider>
          <ProductProvider>
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetails />} />
              </Routes>
              <Sidebar />
              <Footer />
            </Router>
          </ProductProvider>
        </CartProvider>
      </SidebarProvider>
    </>
  );
}

export default App;
