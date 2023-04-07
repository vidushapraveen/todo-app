const express = require("express")
const router = express.Router()

const User = require('../models/user')

//login
router.post("/users/login",
    async (req, res) => {
        try {
            const user = await User.findByCredentials(req.body.email, req.body.password)

            // const token = await user.generateAuthToken()
            // console.log(token)
            // res.send({user,token})
            res.send(user)
        } catch (error) {
            res.status(401).send()
        }
    }
)

router.post("/users",
    async (req, res) => {
        const user = new User(
            req.body
        )
        console.log(req.body)
        try {
            await user.save()
            res.status(201).send(user)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    }
)

router.get("/getUsers/:id",
    async (req, res) => {
        try {
            const _id = req.params.id
            const paramsUser = await User.findById(_id)

            if (!paramsUser) {
                res.status(404).send()
            }
            res.status(200).send(paramsUser)
        } catch (error) {
            res.status(400).send(error)
        }
    }
)

// router.patch("/update/me",
router.put("/update/:id",
    async (req, res) => {
        try {
            // const updateId = req.user._id
            const updateId = req.params.id
            const updateUser = await User.findByIdAndUpdate(updateId, req.body, { new: true })

            if (!updateUser) {
                res.status(404).send()
            }
            res.status(200).send(updateUser)
        }
        catch (error) {
            res.status(400).send(error)
        }
    }
)



module.exports = router;