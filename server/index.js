const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend is working!");
});

// Example: save user info after Firebase login
app.post("/save-user", (req, res) => {
  const { uid, email, displayName } = req.body;

  // Here you can save it to MongoDB later
  console.log("User info received from frontend:", { uid, email, displayName });

  res.status(200).json({ success: true, message: "User info saved to backend!" });
});

//  ✅ New: Test connection route for frontend
app.post("/test-connection", (req, res) => {
  console.log("Received data from frontend:", req.body);
  res.json({ success: true, message: "✅ Frontend is connected to backend!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
