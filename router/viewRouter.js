const express = require('express');
let viewRouter = express.Router();
let {
	viewHomePage,
	viewLoginPage,
	viewPlansPage,
	viewAccountPage,
	viewUpdatePage,
	viewDiabetesPage,
	viewFormPage,
} = require('../controller/viewController');
// will run for all the cases
let { isloggedIn, protectRoute } = require('../controller/authController');
viewRouter.use(isloggedIn);
// next()
viewRouter.get('/home', viewHomePage);
viewRouter.get('/login', viewLoginPage);
viewRouter.get('/plans', viewPlansPage);
viewRouter.get('/me', protectRoute, viewAccountPage);
viewRouter.get('/password', viewUpdatePage);
viewRouter.get('/diabetes', viewDiabetesPage);
viewRouter.get('/form', viewFormPage);
module.exports = viewRouter;
