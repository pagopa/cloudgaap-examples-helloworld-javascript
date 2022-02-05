const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { makeIndexRouter } = require("./routes");

const SERVER_PORT = process.env.PORT;

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Configuring express template engine
app.set("view engine", "ejs");

// Routes
app.use("/", makeIndexRouter());

// Start server
app.listen(SERVER_PORT, () => {
  console.log(`Application started, listening on port ${SERVER_PORT}`);
});
