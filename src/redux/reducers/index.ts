import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

export type ReduxReducers = ReturnType<typeof rootReducer>

export default rootReducer
