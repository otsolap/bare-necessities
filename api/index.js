const workoutsRoute = require('./routes/workouts')
const exercisesRoute = require('./routes/exercises')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const app = express()
const dotenv = require('dotenv')
const { mongoose } = require('mongoose')

dotenv.config()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log(`${err} | Not connected to MongoDB`)
})

app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use(cors())

app.use('/api/workouts', workoutsRoute)
app.use('/api/exercises', exercisesRoute)

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(
    `Live on port: ${port}`
))