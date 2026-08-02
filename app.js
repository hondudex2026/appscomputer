const express = require("express")
const env = require("dotenv").config()
const port = process.env.PORT
const app = express()
const path = require("path")
const fs = require('fs');

//Inicio 

app.use(express.json())
app.use(express.static(path.join(__dirname, '/')));

app.get('/home', (req, res) => {
   res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/office', (req, res) => {
   res.sendFile(path.join(__dirname, 'office.html'))
})

app.get('/Microsoft-365-C2R-Installers', (req, res) => {
   res.sendFile(path.join(__dirname, 'office-m365.html'))
})

app.listen(port, () => {
   console.log(`Servidor corriendo en "http://localhost:${port}/home"`)
})