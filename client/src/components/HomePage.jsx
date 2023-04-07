import './HomePage.css'

import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import ToDo from './ToDo'
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate()
    const [logedName, setLogedName] = useState("")
    const [logedEmail, setLogedEmail] = useState("")
    const [taskText, setTaskText] = useState("")
    const [taskList, setTaskList] = useState([])

    const logedUrl = "http://localhost:2100/getUsers/642fb761d6813a3a12e5e0ba"
    const addTaskUrl = "http://localhost:2100/tasks"
    const getAllTasks = "http://localhost:2100/getTasks"

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await axios.get(logedUrl)
                console.log(results)
                console.log(results.data.name)
                console.log(results.data.email)
                setLogedName(results.data.name)
                setLogedEmail(results.data.email)
            } catch (error) {
                console.log(error)
                console.log('first')
            }
        }
        fetchData()
    })

    const addTaskFunction = async (event) =>{
        event.preventDefault()
        try {
            const submitData = {
                description: taskText
            }

            const responce = await axios.post(addTaskUrl, submitData)
            const status = responce.request.status
            console.log(status)
            alert("Task added sucessfully refresh page to see task")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
    const taskList = async () => {
      try {
        const allTasks = await axios.get(getAllTasks)
        console.log(allTasks)
        console.log(allTasks.data)
        setTaskList(allTasks.data)
      } catch (error) {
        console.log(error)
      }
    }
    taskList()
    },[])
    

  return (
    <div>
        <h1>ToDo App</h1>
        <p className='txt'>UserName : {logedName}</p>
        <p className='txt'>Email : {logedEmail}</p>
        <button className='updateBtn' onClick={() => navigate('updatePassword')}>Update Password</button>
        <button className='logoutBtn' onClick={() => navigate('/')}>Logout</button>
        <hr />

        <form onSubmit={addTaskFunction}>
            <input type="text" 
            placeholder='Enter your task'
            value={taskText}
            onChange={(e) => {
                setTaskText(e.target.value)}}
            />

            <button type='submit' className='taskBtn'>Add Task</button>
        </form>

        <div>
            {taskList.map((list) => <ToDo text={list.description} key={list._id} />)}
        </div>
    </div>
  )
}

export default HomePage