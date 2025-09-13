// const express = require("express");
// const router = express.Router();
// const admin = require("firebase-admin");

// // Initialize Firebase Admin SDK
// const serviceAccount = require("../serviceAccountKey.json"); // get this from Firebase project settings

// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//   });
// }

// // POST /api/auth/login
// router.post("/login", async (req, res) => {
//   try {
//     const { token, email } = req.body;

//     // 🔹 Verify Firebase ID token
//     const decodedToken = await admin.auth().verifyIdToken(token);

//     // Now pass this to DB (your teammate’s part)
//     // Example: await User.findOneAndUpdate({ email }, { lastLogin: Date.now() }, { upsert: true });

//     res.json({ message: "User authenticated", uid: decodedToken.uid, token });
//   } catch (error) {
//     res.status(401).json({ error: "Invalid or expired token" });
//   }
// });

// // POST /api/auth/google-login
// router.post("/google-login", async (req, res) => {
//   try {
//     const { token, email } = req.body;
//     const decodedToken = await admin.auth().verifyIdToken(token);

//     // Save Google user in DB if needed
//     res.json({ message: "Google login successful", uid: decodedToken.uid });
//   } catch (error) {
//     res.status(401).json({ error: "Google login failed" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();

// Test route
router.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log("Login request:", email, password);

  // Dummy response (no DB yet)
  if (email && password) {
    return res.json({ message: "Backend login working ✅", email });
  }
  return res.status(400).json({ error: "Missing fields" });
});

module.exports = router;
