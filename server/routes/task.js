const express = require("express")
const router = express.Router()

const Task = require('../models/task')

router.post("/tasks",
    async (req, res) => {
        const task = new Task(
            req.body
        )
        console.log(req.body)
        try {
            await task.save()
            res.status(201).send(task)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    }
)

router.get("/getTasks",
    async (req, res) => {
        try {
            const getTask = await Task.find({})
            res.status(200).send(getTask)
        } catch (error) {
            res.status(400).send(error)
        }
    }
)

router.post("/deleteTasks",
    async (req,res) => {
        try {
            const {_id} = req.body
            Task.findByIdAndDelete(_id)
            res.send("deleted")
        } catch (error) {
            console.log(error)
        }
    }
)


module.exports = router;