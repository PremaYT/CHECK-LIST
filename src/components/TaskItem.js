import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { BiEdit } from 'react-icons/bi'

import { updateTask, removeTask } from '../actions/taskActions'
import EditTask from './EditTask'

const TaskItem = (props) => {
    const { id, name, status} = props

    const [completed, setCompleted] = useState(status)
    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setCompleted(e.target.checked)
        dispatch(updateTask(id))

    }

    const handleRemoveTask = () => {
        dispatch(removeTask(id))
    }

    

    const handleModalShow = () => {
        setShowModal(!showModal)
    }
    
    return (
            <div className="row" style={{padding:"5%"}}>
                <div className="col-md-1 col-sm-1">
                    <input 
                            type="checkbox"
                            checked={completed}
                            onChange = {handleChange}
                            className="form-check-input"
                        />
                </div>
                <div className="col-md-9 col-sm-9">
                    {name}
                </div>
                <div className='col-md-1 col-sm-1'>
                    <button onClick={handleModalShow} style={{border:"none", color:'#333', backgroundColor:"transparent"}}>
                        <BiEdit />
                    </button>
                    {showModal && <EditTask showModal={showModal} {...props} handleModalShow={handleModalShow} />}
                </div>
                <div className="col-md-1 col-sm-1">
                    <button onClick={handleRemoveTask} style={{border:"none", color:'#333', backgroundColor:"transparent"}}>
                        <RiDeleteBin5Line />
                    </button>
                </div>

            </div>
    )
}

export default TaskItem