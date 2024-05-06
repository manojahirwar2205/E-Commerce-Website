// import express from 'express';

// import { usersignup, userLogin } from '../controller/user-controller.js';
// import { getProducts, getProductById } from '../controller/product-controller.js';
// import { addPaymentGeteway, paymentResponse } from '../controller/payment-controller.js';


// const router = express.Router();


// router.post('/signup', usersignup);
// router.post('/login', userLogin);

// router.get('/products', getProducts);
// router.get('/product/:id', getProductById);

// router.post('/payment', addPaymentGeteway);
// router.post('/callback', paymentResponse);


// export default router; 

import express from  'express';
import { getProductById, getProducts } from '../controller/product-controller.js';
import { usersignup, userLogin } from '../controller/user-controller.js';
import { addPaymentGateway, paymentResponse } from '../controller/payment-controller.js';

const router = express.Router();

//login & signup
router.post('/signup', usersignup);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);


router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

export default router;