import React from 'react'
import {AiOutlineDelete , AiOutlineEdit} from 'react-icons/ai'

import './ToDo.css'
function ToDo({text }) {
  return (
    <div className='listDiv'>
        <div className="task-list">
            <div className="text">
                {text}
            </div>
            <div className="icons">
                <AiOutlineDelete/>
                <AiOutlineEdit  />
            </div>
        </div>
    </div>
  )
}

export default ToDo