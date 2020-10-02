const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {pool} = require('./config')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const getData = (request, response) => {
  pool.query('SELECT * FROM mopitt_data', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

app
  .route('/mopitdata')
  // GET endpoint
  .get(getData)

// Start server
app.listen( 3002, () => {
  console.log(`Server listening`)
})