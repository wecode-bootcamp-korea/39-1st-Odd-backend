require("dotenv").config();

const http = require("http");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const routes = "./routes";
const app = express();

app.use(cors());
app.use(morgan);
app.use(express.json());
app.use(routes);

const server = http.createServer(app);
const PORT = process.env.PORT;

app.get("/ping", function (req, res, next) {
  res.json({ message: "pong" });
});

const start = async () => {
  try {
    server.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    console.error(err);
  }
};

start();
