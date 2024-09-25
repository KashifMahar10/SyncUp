const express = require('express');
const db = require('./db/config'); // Assuming this is your DB connection config
const cors = require('cors');

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(express.json()); // Middleware to parse JSON
app.use(cors({ origin: 'http://localhost:3001' }));

// Routes
app.use('/auth', authRoutes);

// Test route to check if server is running
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(PORT, () => {
    console.log(`${PORT} is working`);
});
