import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard.js';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/v1/product');
      console.log(data.product);
      setData(data.product);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {data &&
          data.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <ProductCard product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Home;
