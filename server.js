const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const scoresApiRouter = require('./routes/api/scores')
const app = express()
const cors = require('cors')

require('dotenv').config()
require('./config/database')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'public')))

// Put API routes here, before the "catch all" route
app.use('/api/scores', scoresApiRouter)

// Configure to use port 3001 instead of 3000 during
// development to avoid coll`ision with React's dev server
const port = process.env.PORT || 3001

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
})
