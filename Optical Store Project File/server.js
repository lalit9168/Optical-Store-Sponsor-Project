import dotenv from 'dotenv'; 
import express from 'express';
import colors from 'colors'; // Assuming you're using colors for styling
import morgan from 'morgan'; // Assuming you're using morgan for logging
import connectDB from './config/db.js'; // Assuming you have database connection logic
import cors from 'cors';

// Configure environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Parse incoming JSON data
app.use(morgan('dev'));  // Use morgan for logging

// Routes (Import and use your route files)
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js';

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);

// Basic Route 
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Gayatri Opt </h1>');
});

// Error Handling Middleware (Place this towards the end)
app.use((err, req, res, next) => {
  // Handle different error statuses and send appropriate responses
});

// Start the Server
const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.bgCyan.white);
});
