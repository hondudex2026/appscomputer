const express = require("express")
const env = require("dotenv").config()
const port = process.env.PORT
const app = express()
const path = require("path")

app.get('/home', (req, res) => {
   res.sendFile('index.html', {
      root: __dirname
   })
})

app.get('/office', (req, res) => {
   res.sendFile('office.html', {
      root: __dirname
   })
})

app.use(express.json())
app.use(express.static(path.join(__dirname, 'index.html', 'office.html')))

app.listen(port, () => {
   console.log(`Servidor corriendo en "http://localhost:${port}/home"`)
})