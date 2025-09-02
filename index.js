const express = require("express");

// Create an Express app
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Hello, World! 🚀");
});

// Another route
app.get("/api/data", (req, res) => {
  res.json({ message: "This is sample data", time: new Date() });
});

// POST route
app.post("/api/echo", (req, res) => {
  res.json({ received: req.body });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});