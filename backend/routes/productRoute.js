import express from 'express';
import { allProduct, singleProduct } from '../controller/productController.js';

const productRouter = express.Router();

productRouter.route('/product').get(allProduct);
productRouter.route('/product/:id').get(singleProduct);

export default productRouter;
