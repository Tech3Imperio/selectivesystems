const express = require("express");
const userRouter = require("./Routes/user");
const Dbconnector = require("./DatabaseConnection/user");
const logHistory = require("./Middleware/user");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = 3001; // Ensure your backend runs on port 3001

// Database connection
Dbconnector(
  "mongodb+srv://tech3:xFJiJ9rvZgFHP52K@contactinfo.yuh5v.mongodb.net/?retryWrites=true&w=majority&appName=ContactInfo"
)
  .then(() => {
    console.log("Database connected...");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://selectivesystems.vercel.app", // Allow requests from the React frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type",
  })
);
app.use(logHistory("log.txt"));

// Routes (Removing '/user')
app.use("/", userRouter); // Root path is now used

// Test route
app.get("/test", (req, res) => {
  res.send("Test route is working");
});

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
