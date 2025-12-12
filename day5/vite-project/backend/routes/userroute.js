import express from 'express';
import { createuser, getuser } from '../controller/usercontroller.js';

const route = express.Router();

route.post('/user', createuser);
route.get('/users', getuser);

export default route;