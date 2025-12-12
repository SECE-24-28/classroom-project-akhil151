import express from 'express';
import { getuser,getuserbyid,loginuser,registeruser,deleteuser } from '../controller/usercontroller.js';

const route = express.Router();

route.post('/user',registeruser );
route.post('/user/login', loginuser);
route.delete('/user/:id', deleteuser);
route.get('/users', getuser);
route.get('/user/:id', getuserbyid);

export default route;