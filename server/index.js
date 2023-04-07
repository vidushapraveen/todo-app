require('./db/mongoose')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')


const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(userRouter)
app.use(taskRouter)

const port = 2100

app.listen(port, () => {
    console.log(`server is upped and running on port: ` + port)
})

