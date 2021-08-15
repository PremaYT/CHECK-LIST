const intialState = JSON.parse(localStorage.getItem('tasks')) || []

export const tasksReducer = (state=intialState, action) => {
    switch(action.type){
        case 'ADD_TASK' : {
            return [action.payload, ...state]
        }
        case 'UPDATE_STATUS' : {
            return action.payload
        }
        case 'REMOVE_TASK' : {
            const result = state.filter(ele => ele.id !== action.payload)
            return result
        }
        case 'REORDER_ITEMS':{
            return action.payload
        }
        default : {
            return [...state]
        }
    }
}