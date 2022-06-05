const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv");
const cors = require("cors");

const routes = require("./routes/routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(routes);

env.config();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});