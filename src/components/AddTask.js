import React from 'react'
import { useDispatch } from 'react-redux'

import TaskForm from './TaskForm'
import { addTask } from '../actions/taskActions'

const AddTask = () => {

    const dispatch = useDispatch()

    const addItem = (formData) => {
        dispatch(addTask(formData))
    }

    return ( <TaskForm addItem={addItem}/> )
}

export default AddTask
