const express = require("express");
const app = express();

const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );

  req.appName = "GoNode";

  return next();
};

app.get("/", logMiddleware, (req, res) => {
  return res.send(`Seja Bem Vindo, ${req.query.name}`);
});

app.get("/login", logMiddleware, (req, res) => {
  return res.send(`Bem vindo ao ${req.appName}`);
});

app.get("/nome/:name", (req, res) => {
  return res.send(`Seja bem vindo, ${req.params.name}`);
});

app.get("/json/:name", (req, res) => {
  return res.json({
    message: `Seja Bem Vindo, ${req.params.name}`
  });
});

app.listen(3000);
