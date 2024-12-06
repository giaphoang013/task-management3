const express = require('express');
const database = require("./config/database");
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser");
const cors = require("cors")
require("dotenv").config();

const routesApiVer1 = require("./api/v1/routes/index.route")

const app = express();
const port = process.env.PORT;

app.use(cors());


database.connect();

app.use(cookieParser());

// parse application/json
app.use(bodyParser.json())

// Routes Version 1
routesApiVer1(app)





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})