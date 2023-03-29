const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
