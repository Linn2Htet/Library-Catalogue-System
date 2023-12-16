const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGO_URL

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
// Get the default connection
const db = mongoose.connection;

// Event handlers for the connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

module.exports = db;