const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const recipesRouter = require("./routes/recipes")
const usersRouter = require("./routes/users")

app.use("/recipes", recipesRouter)
app.use("/users", usersRouter)

module.exports = app
