import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import TaskForm from './TaskForm'

import { updateTask } from '../actions/taskActions'

const EditTask = (props) => {
    const {showModal, id, name, status, handleModalShow} = props
    const dispatch =  useDispatch()

    const editItem = (formData) => {
        dispatch(updateTask(id, formData))
        handleModalShow()
    }

    return (
        <Modal
            show={showModal}
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Body>
                <TaskForm {...props} editItem={editItem} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleModalShow} variant="danger">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default EditTask
