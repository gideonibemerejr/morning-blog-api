const express = require('express')
const path = require('path')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const postsApiRouter = require('./routes/api/posts')
const app = express()

require('dotenv').config()
require('./config/database')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public')))

// Put API routes here, before the "catch all" route
app.use('/api/posts', postsApiRouter)

// Configure to use port 3001 instead of 3000 during
// development to avoid coll`ision with React's dev server
const port = process.env.PORT || 8000

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
})
