const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {

    const token = req.header('Authorization')?.replace('Bearer ', '').trim();

    if (!token) {
        return res.status(404).json({ message: "Access Denied" });
    }

    try {
        
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; 
        next(); 
    } catch (error) {
        return res.status(400).json({ message: "Invalid Token" });
    }
};

module.exports = authMiddleware;
