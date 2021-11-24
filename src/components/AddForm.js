
import React from 'react'
import { useState } from 'react'

// React-Toastify notification library
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const AddForm = ({onAdd}) => {
const [ text, setText ] = useState('')
const [ day, setDay ] = useState('')
const [ reminder, setReminder ] = useState(false)

// creating an onSubmit function with form validation and etc
const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
        toast.error("Please, add a task")
        return
    }else{
        toast.success("You've successfully added a task")
    }
     
    // then we call the onAdd function with texts, day and reminder as values
    onAdd({ text, day, reminder})

    // clear all inputs afterwards
    setText('')
    setDay('')
    setReminder(false)
}




    return (
      <div> 
          {/* container for react-toastify */}
          <ToastContainer position={toast.POSITION.TOP_RIGHT}/> 

        <form className='form-style '>
            <div className='task-style'>
                <label>Task</label>
                <input type='text' placeholder='Add a task' 
                value={text}
                onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='day-style'>
                <label>Day and Time</label>
                <input type='datetime-local' 
                value={day}
                onChange={ (e) => setDay(e.target.value) } />
            </div>
            <div className='reminder-style'>
                <label className='reminder-label'>Set Reminder</label>
                <input type='checkbox' 
                value={reminder}
                checked={reminder}
                onChange={ (e) => setReminder(e.currentTarget.checked)}/>
                
            </div>
            <div className='submit-btn'>
                <input type="submit" value='Save Task' onClick={onSubmit}/>
            </div>

        </form>
    </div>
    )
}

export default AddForm
