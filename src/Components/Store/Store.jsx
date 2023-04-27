import {configureStore} from '@reduxjs/toolkit' 
import { useReducerCard } from './Reducer/GroupReducer'

const store = configureStore({
    reducer : {
        useMass : useReducerCard
    }
})

export {store}