<<<<<<< HEAD
const express = require('express');
const cors = require('cors');
require('dotenv').config();
=======
const express = require("express");
const cors = require("cors");
require("dotenv").config();
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405

const app = express();

app.use(cors());
<<<<<<< HEAD
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const recipesRouter = require('./routes/recipes')
const usersRouter = require('./routes/users')

app.use('/recipes', recipesRouter)
app.use('/users', usersRouter)



module.exports = app
=======
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const recipesRouter = require("./routes/recipes").router;
const usersRouter = require("./routes/users");

app.use("/recipes", recipesRouter);
app.use("/users", usersRouter);

module.exports = app;
>>>>>>> d9de86131d647a15328486f455ebdd17fa0fb405
