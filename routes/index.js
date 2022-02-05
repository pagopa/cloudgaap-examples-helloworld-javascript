const express = require("express");

function indexGETHandler() {
  return function (_req, res) {
    res.render("index");
  };
}

function makeIndexRouter() {
  const router = express.Router();

  router.get("/", indexGETHandler());

  return router;
}

module.exports = { makeIndexRouter };
