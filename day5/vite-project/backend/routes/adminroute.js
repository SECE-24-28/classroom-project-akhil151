import express from 'express';
import { getadmin,getadminbyid,registeradmin,deleteadmin, loginadmin } from '../controller/admincontroller.js';

const route = express.Router();

route.post('/admin',registeradmin );
route.post('/admin/login', loginadmin);
route.delete('/admin/:id', deleteadmin);
route.get('/admins', getadmin);
route.get('/admin/:id', getadminbyid);

export default route;