const express = require('express');
let diabetesRouter = express.Router();
let { createForm, updateForm, deleteForm, getForm } = require('../controller/diabetesController');
diabetesRouter.route('/create').post(createForm);
//diabetesRouter.route('/create').post(createForm);
module.exports = diabetesRouter;
