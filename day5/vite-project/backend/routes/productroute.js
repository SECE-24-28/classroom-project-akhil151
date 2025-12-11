import express from 'express';
import { createProduct, getProducts } from '../controller/productcontroller.js';

const route = express.Router();

route.post('/product', createProduct);
route.get('/products', getProducts);

export default route;