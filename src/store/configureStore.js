import { createStore, combineReducers } from 'redux'

import { tasksReducer }  from '../reducers/tasksReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
            tasks : tasksReducer
    }))

    return store
}

export default configureStore