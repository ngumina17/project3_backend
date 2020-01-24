const express = require('express')
const app = express()
const parser = require('body-parser')
// var cors = require('cors')



app.use(parser.urlencoded({ extended: true }))
app.use(parser.json())
// app.use(cors())

app.get('/', (req,res) => {
    res.send('hitting default route')
  })





app.listen(4000, () => console.log("Running on port 4000!"))