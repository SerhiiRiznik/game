import { ThunkAction } from "redux-thunk"
import { AppDispatch, RootState } from "./store"

const initialState = {
  
}

export default function statisticsReducer(state = initialState, action:ActionType): typeof initialState {
  switch (action.type) {
    case 'GAME/START':
      return {
        ...state,started: true
      }
    default:
      return state
  }
}
type ActionType = any
// ACTIONS
const startGameAC = ()=>({type: 'GAME/START'})


// THUNK 
type ThunkType = ThunkAction<void, RootState, unknown, ActionType>
let idSetTimeout: NodeJS.Timeout
export const startGame = ():ThunkType=>{
 return ()=>{

 }
}
