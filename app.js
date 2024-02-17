import express from 'express';
const app = express();
const PORT = 3000;

// Middlewares
app.use(json()); // Built-in middleware for parsing JSON requests


// Application-level middleware
import authMiddleware from './middleware/authMiddleware';
app.use(authMiddleware);

// Router-level middleware
import authRoutes from './routes/authRoutes';
import blogRoutes from './routes/blogRoutes';
app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
