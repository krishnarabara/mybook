const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const { MONGODB_URI } = process.env;

app.get('/', (req,res) => {
    res.send('Hello world!');
});

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);


// MongoDB connection
mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
