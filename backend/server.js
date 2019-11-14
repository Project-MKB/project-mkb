<<<<<<< HEAD
const app = require('./app')
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
=======
const app = require("./app");
const port = process.env.PORT || 5000;
const mongoose = require("mongoose");
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405

// Connect database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
<<<<<<< HEAD
})
=======
});
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405

// Connect backend server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
