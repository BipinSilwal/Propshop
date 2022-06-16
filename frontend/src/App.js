import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Home from './screen/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './screen/Cart';
import Login from './screen/Login';
import ProductDetails from './screen/ProductDetails';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
