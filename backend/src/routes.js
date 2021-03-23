const express = require('express');
const routes = express.Router();
const middlewares = require('./middlewares');
const AdminController = require('./controllers/AdminController');
const ClientController = require('./controllers/ClientController');

// create Admin
routes.post('/admin', AdminController.store);

// login Admin
routes.post('/admin/login', AdminController.login);

// logout Admin
routes.post('/admin/logout', AdminController.logout);

// create Client
//routes.post('/client', ClientController.store);

module.exports = routes;