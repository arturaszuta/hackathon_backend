const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { api } = require('./api')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/api', api);



// Start server
app.listen(3002, () => {
  console.log(`Server listening`)
})
