import express from 'express';
import { createProduct } from '../controller/productcontroller.js';

const route = express.Router();

route.post('/product', createProduct);

export default route;