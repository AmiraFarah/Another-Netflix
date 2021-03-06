// Imports
const express = require('express')
const app = express()
require('dotenv').config()
require('./config/database')

// ===== MIDDLEWARES =====
app.use(express.json())

// check if we have a token and create req.user
// app.use(require('./config/checkToken'))

// ===== ROUTES =====

// Users
app.use('/api/v1/users', require('./routes/api/users'))

// PROTECT API routes below from  unATHORIZED USERS
const ensureLoggedIn = require('./config/ensureLoggedIn') 
// Movies
app.use('/api/v1/movies', ensureLoggedIn, require('./routes/api/movies'))



// ===== PORT =====
const port = 8080

app.listen(port, () => console.log(`Express app running on port ${port}`))