import './LoginPage.css'

import { useState } from 'react';
import axios from 'axios'
import {useNavigate } from 'react-router-dom'


import React from 'react'

function LoginPage() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const loginUrl = "http://localhost:2100/users/login"

    const loginFunction = async (event) => {
        event.preventDefault()
        try {
            const submitData = {
                email: userName,
                password: password
            }
            const responce = await axios.post(loginUrl, submitData)
            const status = responce.request.status
            console.log(status)

            if (status === 200) {
                console.log("loged in successfully")
                navigate('home')
                alert('loged in sucessfully')
            }
        } catch (error) {
            console.log(error)
            alert('Invalid username or password')
        }
    }


    return (
        <div>
            <div className="App">

                {/* <button onClick={() => { navigate('mytasks') }}>Home Page</button> */}
                <h1>Login</h1>

                <form onSubmit={loginFunction}>
                    <input
                        type='text'
                        name='userName'
                        placeholder='User Name'
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value)
                            // console.log(e.target.value)
                        }}
                        className='log'
                    />

                    <input
                        type='text'
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            // console.log(e)
                        }}
                        className='log'
                    />

                    <button type='submit'>Login</button>
                </form>
            </div>

        </div>
    )
}

export default LoginPage