const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const connectionString = 'mongodb+srv://root:<password>@medicure.znsbupj.mongodb.net/?retryWrites=true&w=majority&appName=MediCure';

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error(err));