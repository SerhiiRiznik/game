import { getRandomInt } from './../selectors';
import { ThunkAction } from "redux-thunk"
import { getMinResults } from "../selectors"
import { AppDispatch, RootState } from "./store"

const initialState = {
  name: '',
  started: false,
  step: 0,
  
  firstClick:0,
  secondClick:0,
  background: 'stoped',
  info:{
    message: 'safdasdsad',
    showMessage: false,
  },
  result: {
    currentResult: null,
    results:[] as string[],
    bestResult: 0,
    showResult:false,
    test:[] as any
  }
  
}

export default function gameReducer(state = initialState, action:ActionType): typeof initialState {
  switch (action.type) {
    case 'GAME/START':
      return {
        ...state,started: true
      }
    case 'GAME/STOP':
      return {
        ...state,
        started: false
      }
    case 'GAME/AND':
      return {
        ...state,
        started: false,
      }
    case 'GAME/RESET':
    return {
      ...state,
      name: '',
      started: false,
      step: 0,
      info:{
        message: '',
        showMessage: false,
      },
      result: {
        currentResult: null,
        results:[],
        bestResult: 0,
        showResult: false,
        test: state.result.test
      }
    }
    case 'GAME/NEXT_STEP':
      return {
        ...state,
        step: ++state.step
      }
    case 'GAME/SET_NAME':
      return {
        ...state,
        name: action.payload
      }
    case 'GAME/SET_MESSAGE':
      return {
        ...state,
        info: {
          ...state.info,
          message: action.payload
        }
      }
    case 'GAME/SET_FIRST_CLICK':
      return {
        ...state,
        firstClick: action.payload
      }
    case 'GAME/SET_SECOND_CLICK':
      return {
        ...state,
        secondClick: action.payload
      }
    case 'GAME/SET_BACKGROUND':
      return {
        ...state,
        background: action.payload
      }
    case 'GAME/ADD_RESULT':
      {
        // const item = action.item;
        // const changedValues = {
        //   ...state.result.test,
        //   [item.id]: item,
        // };
        return {
          ...state,
          result: {
            ...state.result,
            currentResult: action.payload,
            results: [
              ...state.result.results, action.payload
            ],
            // test: [
            //   ...state.result.test,
            //   {
            //     x:action.payload , y: 12
            //   }
            // ]
            test: [
              ...state.result.test,
                action.payload
            ]
          }
        }
      }
    case 'GAME/ADD_BEST_RESULT':
      return {
        ...state,
        result: {
          ...state.result,
          bestResult: action.payload
        }
      }
    case 'GAME/SHOW_MESSAGE':
      return {
        ...state,
        info:{
          ...state.info,
          showMessage: action.payload,
        },
      }
    case 'GAME/SHOW_RESULT':
      return {
        ...state,
        result: {
          ...state.result,
          showResult:action.payload,
        }
      }
    default:
      return state
  }
}
type ActionType = any
// ACTIONS
const startGameAC = ()=>({type: 'GAME/START'})
const stopGameAC = ()=> ({type: 'GAME/STOP'})
const ResetGameAC = ()=> ({type: 'GAME/RESET'})
const setResultGameAC = (arg:number | null)=> ({type: 'GAME/ADD_RESULT',payload: arg})
const setBestResultGameAC = (arg:number)=> ({type: 'GAME/ADD_BEST_RESULT',payload: arg})
const setNamegAC = (arg:string)=> ({type: 'GAME/SET_NAME',payload: arg})
const setMessageAC = (arg:string)=> ({type: 'GAME/SET_MESSAGE',payload: arg})
const setNextStepAC = (arg:number)=> ({type: 'GAME/NEXT_STEP',payload: arg})
const setFirstClickAC = (arg:number)=>({type:'GAME/SET_FIRST_CLICK',payload: arg})
const setSecondClickAC = (arg:number)=>({type:'GAME/SET_SECOND_CLICK',payload: arg})
const setBackground = (arg:string)=>({type:'GAME/SET_BACKGROUND',payload: arg})
const showMessageAC = (arg:boolean)=> ({type: 'GAME/SHOW_MESSAGE',payload: arg})
const showResultAC = (arg:boolean)=> ({type: 'GAME/SHOW_RESULT',payload: arg})


// THUNK 
type ThunkType = ThunkAction<void, RootState, unknown, ActionType>
let idSetTimeout: NodeJS.Timeout
export const startGame = ():ThunkType=>{
  return (dispatch:any, state:any)=>{

    idSetTimeout = setTimeout(()=>{
      const d = new Date().getTime()
      dispatch(setFirstClickAC(d))
      dispatch(setBackground('started'))
    },getRandomInt(1500,6000))
    dispatch(startGameAC())
  }
}
export const stopGame = ():ThunkType=>{
  return (dispatch:AppDispatch, getState:any)=>{
    let state = getState()

    if (state.gameReducer.background === 'stoped') {
      dispatch(showResultAC(false))
      dispatch(setMessageAC('Too soon!'))
      dispatch(stopGameAC())
      clearTimeout(idSetTimeout)
      dispatch(showMessageAC(true))
    } else {
      const d =  new Date().getTime()
      dispatch(setBackground('stoped'))
      dispatch(setSecondClickAC(d))
      dispatch(setNextStepAC(++state.gameReducer.step))
      dispatch(setMessageAC(''))
      dispatch(stopGameAC())
      state = getState()
      dispatch(setResultGameAC(state.gameReducer.secondClick - state.gameReducer.firstClick))
      dispatch(setBestResultGameAC(getMinResults(state)))
      dispatch(showResultAC(true))
    }
  }
}
export const resetGame = ():ThunkType=>{
  return (dispatch:any, getState:any)=>{
    dispatch(ResetGameAC())
  }
}
export const setName = (arg:string):ThunkType=>{
  return (dispatch:any, getState:any)=>{
    console.log(arg);
    dispatch(setNamegAC(arg))
  }
}
export const saveScore = (arg:any):ThunkType=>{
  return (dispatch:any, getState:any)=>{
    let state = getState()
    if (state.gameReducer.name) {
      localStorage.setItem(state.gameReducer.name, state.gameReducer.result.bestResult)
      dispatch(showMessageAC(true))
      dispatch(setMessageAC('Your best reaction save to localStorege'))
    } else {
      dispatch(showMessageAC(true))
      dispatch(setMessageAC('Enter your Name'))
    }
  }
}
