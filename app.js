const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const {pool} = require('./config')
const { request, response } = require('express')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const getData = (request, response) => {
  pool.query('SELECT * FROM finaldata', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

app
  .route('/finaldata')
  // GET endpoint
  .get(getData)


// Start server
app.listen( 3002, () => {
  console.log(`Server listening`)
})