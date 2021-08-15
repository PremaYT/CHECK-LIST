export const addTask = (formData) => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    localStorage.setItem('tasks', JSON.stringify([{...formData}, ...tasks]))

    return {
        type : 'ADD_TASK',
        payload : {...formData}
    }
}


export const updateTask = (id, formData) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    const result = tasks.map(ele => {
        if(ele.id === id && formData){
            return {...ele, ...formData}
        }
        else if(ele.id === id){
            return {...ele, status : !ele.status}
        }
        else{
            return {...ele}
        }
    })
    localStorage.setItem('tasks', JSON.stringify(result))

    return {
        type : 'UPDATE_STATUS',
        payload : [...result]
    }
}

export const reorderItems = (newOrder) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    const result = tasks.map(ele => {
        if(!ele.status){
            return {...newOrder.shift()}
        }else{
            return {...ele}
        }
    })

    localStorage.setItem('tasks', JSON.stringify(result))

    return {
        type : 'REORDER_ITEMS',
        payload : [...result]
    }

}

export const removeTask = (id) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    const result = tasks.filter(ele => ele.id !== id) 
    localStorage.setItem('tasks', JSON.stringify(result))


    return {
        type : 'REMOVE_TASK',
        payload : id
    }
}