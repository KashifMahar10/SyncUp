const express = require('express');
const db = require('./db/config'); // Assuming this is your DB connection config
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON

// Routes
app.use('/auth', authRoutes);

// Test route to check if server is running
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(PORT, () => {
    console.log(`${PORT} is working`);
});
