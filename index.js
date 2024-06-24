const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
require('dotenv').config

const numberController = require('./src/controller/numberController')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(morgan('dev'))

app.post('/input-number', numberController.handleNumberInput)
app.get('/list-numbers', numberController.listAllNumbers)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
