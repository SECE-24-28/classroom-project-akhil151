import express from 'express';
import { createuser, getuser,getuserbyid } from '../controller/usercontroller.js';

const route = express.Router();

route.post('/user', createuser);
route.get('/users', getuser);
route.get('/users/:id', getuserbyid);

export default route;