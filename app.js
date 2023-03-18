const express = require("express");
const dotenv = require("dotenv");
const postRoute = require("./routes/wave");
const cors = require("cors");

var app = express();
app.use(cors());

dotenv.config();

const port = process.env.PORT || 4000;

app.use("/api/v1/wave", postRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
