import pixabayRoutes from './routes/pixabay.js';
import express from 'express';
import cors from 'cors';

// Express app setup
const port = process.env.PORT || 5000;
const app = express();
app.listen(port, () =>
  console.log(`Server running on: http://localhost:${port}`),
);

// Cors middleware
app.use(
  cors({
    origin: process.env.REACT_CLIENT,
  }),
);

// Routes
app.use('/api/pixabay', pixabayRoutes);
