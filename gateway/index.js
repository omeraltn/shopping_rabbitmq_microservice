const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use("/customer", proxy("http://localhost:3001"));
app.use("/products", proxy("http://localhost:3002"));
app.use("/shopping", proxy("http://localhost:3003"));

app.listen(3000, () => {
  console.log("Gateway servisi reverse proxye başladı");
});
