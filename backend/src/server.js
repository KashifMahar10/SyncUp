const express = require('express');
const db = require('./db/config'); 
const cors = require('cors');

const authRoutes = require('./routes/auth');
const projectRoutes = require('./routes/projectRoutes');

const app = express();
const PORT = process.env.PORT || 5000; 

app.use(express.json()); 
app.use(cors({ origin: 'http://localhost:3001' }));

// Routes
app.use('/auth', authRoutes);
app.use('/projects', projectRoutes);

// Test route to check if server is running
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(PORT, () => {
    console.log(`${PORT} is working`);
});
