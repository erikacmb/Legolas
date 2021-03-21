const express = require('express');
const routes = express.Router();
const middlewares = require('./middlewares');
const AdminController = require('./controllers/AdminController');

// create Admin
routes.post('/admin', AdminController.store);

// login Admin
routes.post('/admin/login', AdminController.login);

// logout Admin
routes.post('/admin/logout', middlewares.verifyToken, AdminController.logout);

module.exports = routes;