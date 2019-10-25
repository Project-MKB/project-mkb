const app = require('./app')
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

// Connect database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Connect backend server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});