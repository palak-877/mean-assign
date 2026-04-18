// Import required modules
const express = require("express"); // framework to create server
const mongoose = require("mongoose"); // to connect MongoDB
const cors = require("cors"); // allows frontend to communicate

require("dotenv").config(); // to use environment variables

const app = express();

// Middleware
app.use(express.json()); // parses incoming JSON data
app.use(cors()); // enables cross-origin requests

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});