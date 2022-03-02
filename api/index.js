const cors = require('cors')
const express = require('express')
const app = express()
const dotenv = require('dotenv')
const { default: mongoose } = require('mongoose')

dotenv.config()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log(`${err} | Not connected to MongoDB`)
})

app.unsubscribe(express.json())
app.use(cors())

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(
    `Live on port: ${port}`
))