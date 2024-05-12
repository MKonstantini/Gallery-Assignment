// Express app setup
import express from 'express';
import cors from 'cors'
const port = process.env.PORT || 5000;
const app = express();
app.listen(port, () => console.log(`Server running on: http://localhost:${port}`));

// Cors middleware
app.use(cors({
    origin: process.env.REACT_CLIENT
}))

// Routes
import pixabayRoutes from './routes/pixabay.js'
app.use("/api/pixabay", pixabayRoutes);
