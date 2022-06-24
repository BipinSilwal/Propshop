import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard.js';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../action/productAction.js';

const Home = () => {
  const { products } = useSelector((state) => state.allProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products &&
          products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <ProductCard product={product} />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Home;
