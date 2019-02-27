const express = require("express");
const router = require('./router');
const fileupload = require("express-fileupload");

const cors = require('cors');
const app = express();

const port = 8081;

app.use(cors());
app.use(fileupload());
app.use(router)
  .listen(port, () => console.log('Example app listening on port ' + port));