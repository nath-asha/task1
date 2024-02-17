const express = require('express');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json()); // Built-in middleware for parsing JSON requests


// Application-level middleware
const authMiddleware = require('./middleware/authMiddleware').default;
app.use(authMiddleware);

// Router-level middleware
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');
app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
