const mongoose = require('mongoose')

const url = 'mongodb+srv://vidushahstd:vidushahstd@cluster0.5fd7qvl.mongodb.net/todoDBmy?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection
connection.once("open", () => {
    console.log("Mongodb Connected")
})
