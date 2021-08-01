import { applyMiddleware, combineReducers,   compose,   createStore } from "redux"
import thunk from "redux-thunk"
import gameReducer from "./gameReducer"

const reducers = combineReducers({
   gameReducer
})
// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(reducers, compose(applyMiddleware(thunk)))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
