const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const livestockRoutes = require('./routes/livestockRoutes');
const carouselRoutes = require('./routes/carouselRoutes');
const expertsRoutes = require('./routes/expertsRoutes');  // Add if experts are included
const blogRoutes = require('./routes/blogRoutes');        // Add if the blog section is included
const purchaseRoutes = require('./routes/purchaseRoutes'); // Add purchase routes

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Database connection error:', err));

// Route Integrations
app.use('/api/auth', authRoutes);                // Authentication routes (login, register)
app.use('/api/livestock', livestockRoutes);      // Livestock routes (view, details, pagination)
app.use('/api/carousel', carouselRoutes);        // Carousel routes (add, update, delete images)
app.use('/api/experts', expertsRoutes);          // Experts routes (add if managing experts)
app.use('/api/blog', blogRoutes);                // Blog routes (add if managing blogs)
app.use('/api/purchase', purchaseRoutes);        // Purchase routes (add if managing purchases)

// Define a default route (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the Kapkatet Dairy Farm API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
