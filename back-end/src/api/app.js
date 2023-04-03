const express = require('express');
const cors = require('cors');
const { productRoutes, loginRoutes, salesRoutes } = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/images', express.static('public'));
app.use('/login', loginRoutes);
app.use('/products', productRoutes);
app.use('/sales', salesRoutes);

module.exports = app;
