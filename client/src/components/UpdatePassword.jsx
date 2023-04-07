import React from 'react'
import { useState } from 'react'

function UpdatePassword() {
    const [newPassword, setNewPassword] = useState("")
    return (
        <div>
            <h1>Update Your Password</h1>
            <form >
                <input
                    type='text'
                    name='userName'
                    placeholder='Enter New Password'
                    value={newPassword}
                    onChange={(e) => {
                        setNewPassword(e.target.value)
                    }}
                />
            </form>
        </div>
    )
}

export default UpdatePassword