const express = require('express')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 5000

const app = express()

app.get('/', (req,res) =>{
    res.status(200).json({message : 'Hi, Im on port 5000'})
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))