import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import TaskItem from './TaskItem'
import { reorderItems } from '../actions/taskActions'

const TasksList = (props) => {
    const {tasks} = useSelector(tasks => tasks)
    console.log('rerender')
    const [completedTasks, setCompletedTasks] = useState([...tasks.filter(ele => ele.status)])
    const [incompleteTasks, setIncompleteTasks] = useState([...tasks.filter(ele => !ele.status)])

    const dispatch = useDispatch()
    
    useEffect(() => {
        setCompletedTasks(tasks.filter(ele => ele.status))
        setIncompleteTasks(tasks.filter(ele => !ele.status))
        // console.log(tasks)
    },[tasks])

    const handleOnDragEnd = (result) => {
        if(!result.destination) return
        const items = [...incompleteTasks]
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)
        dispatch(reorderItems(items))
    }

    return (
        <div style={{margin:'0px', padding:'0px', width:'100%'}}>
            {
                tasks.length > 0 ? (
                    <>
                        <DragDropContext onDragEnd={handleOnDragEnd}> 
                            <Droppable droppableId="taskslist">
                                {
                                    (provided) => {
                                        return <ul className="taskslist" {...provided.droppableProps} ref={provided.innerRef}>
                                            {
                                                incompleteTasks.map((task, index) => {
                                                    return (
                                                        <Draggable key={task.id} draggableId={task.id} index={index} >
                                                            {
                                                                (provided) => (
                                                                    <li 
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        className="task-incomplete"
                                                                    >
                                                                    <TaskItem  {...task}/>
                                                                    </li>
                                                                )
                                                            }
                                                        </Draggable> 
                                                    )
                                                })
                                            }
                                            {provided.placeholder}
                                        </ul>
                                    }
                                }
                            </Droppable>
                    </DragDropContext>
                    <ul>
                        {
                            completedTasks.map(task => {
                                return <li key={task.id} className='task-complete'>
                                    <TaskItem {...task} />
                                </li>
                            })
                        }
                    </ul>
                    </>
                    
                ) : (
                    <h3 style={{textAlign:'center'}}>Add you first task..</h3>
                )
            }
        </div>
    )
}

export default TasksList