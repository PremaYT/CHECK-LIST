import React, { useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import { Form, Row, Col, Button } from 'react-bootstrap'

const TaskForm = (props) => {
    const { addItem, id, name:taskName, status:taskStatus, editItem } = props

    const [name, setName] = useState(taskName || '')
    const [status, setStatus] = useState(taskStatus || false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name){
            const formData = {
                id : id || uuidv4(),
                name,
                status
            }
            editItem ? editItem(formData) : addItem(formData)
            setName('')
            setStatus(false)
        }
    }

    return (
            <Form onSubmit={handleSubmit} className="mb-3">
                <Row>
                    <Col>
                        <Form.Control 
                             type="text"
                             value={name}
                             placeholder="task Name"
                             onChange = {(e) => {setName(e.target.value)}}
                        />
                    </Col>
                    <Col>
                        <Form.Check 
                            type="checkbox"
                            checked={status}
                            onChange={e => { setStatus(e.target.checked)}}
                            label="Completed"
                        />
                    </Col>
                    <Col>
                        <Button type="submit"> Add </Button>
                    </Col>
                </Row>
            </Form>
        
    )
}

export default TaskForm