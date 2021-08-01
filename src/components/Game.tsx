
import React, { useState } from 'react'
import {  withCookies } from 'react-cookie';
import { connect, ConnectedProps } from 'react-redux';
import { startGame,stopGame,setName,resetGame,saveScore} from '../reducers/gameReducer';
import { RootState } from '../reducers/store';
import { convertTime, getMinResults } from '../selectors';
import AboutTest from './AboutTest';
import { Results } from './Results';


const Game:React.FC<PropsFromRedux> = React.memo(({isStarted,result,startGame,stopGame,
  getBestResult, resetGame,step,setName,name,info,background,saveScore,...props}): JSX.Element=> {
   
   const [count, setCount] = useState<number>(0)

   const Start =()=> {
      setCount(count+1)
      stopGame()
   }
   const Reset =()=> {
      setCount(0)
      resetGame()
   }

   const currentResult = convertTime(result.currentResult)
   const bestResult = convertTime(getBestResult)

   return(
      <>
         <section className='d-flex flex-wrap' >
            <div className='col-lg-9 game'>
               {
               isStarted ?
                  <div  className={`game__wrapp ${background}`} onClick={Start}>
                        {background === 'stoped' ? 
                           <div>
                           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" className="svg-inline--fa fa-ellipsis-h fa-w-8 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                           <p>Wait for green</p>
                           </div>
                           :
                           <div>
                              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" className="svg-inline--fa fa-ellipsis-h fa-w-8 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                              <p>Click!</p>
                           </div>
                        }
                  </div>
                  :
                  <div className='card p-3 bg-dark'>
                     {
                     info.showMessage && 
                        <h2 className='card-title'>
                           {info.message}
                        </h2>
                     }
                     {
                     step === 0 && 
                        <>
                        {count === 0 && <h2 className='card-title'>Reaction Time Test</h2>}
                           
                           <h6 className='p-2'>When the red box turns green, click as quickly as you can.</h6>
                     </> 
                     }
                     {
                     (result.showResult) && 
                        <div className='card-header'>
                           <p className='card-title'>
                              {
                              (result.results.length === 3 ) ?
                              `Your best Speed: ${bestResult}`
                              :
                              `Your Speed: ${currentResult}`
                              }
                           </p>
                        </div>
                     }
                     <div className='card-Startter'>
                        {
                           (result.results.length === 3) ? 
                           <div>
                              <button className='btn btn-light m-2' onClick={Reset}>Reset game</button>
                              <div className='input-group p-2'>
                                 <input className='form-control'  type='text' placeholder='Enter Your Name' name='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
                                 <div className='input-group-prepend'>
                                    <button onClick={saveScore} className='btn btn-light'>Save score</button>
                                 </div>
                                 
                              </div>
                           </div>
                           :<button className='btn btn-light'
                              onClick={()=>startGame()}>
                              {step>=1 ? `Click to try again.` : `Click Here To Start Playing`}
                           </button>
                        }
                     </div>
                  </div>
               }
            </div>
            <Results result={result} name={name} />
         </section>
         <AboutTest result={result}/>
      </>
   )
})


function mapState  (state: RootState){
   return {
      isStarted: state.gameReducer.started,
      info: state.gameReducer.info,
      step: state.gameReducer.step,
      result: state.gameReducer.result,
      getBestResult: getMinResults(state),
      name: state.gameReducer.name,
      background: state.gameReducer.background
   }
} 

const connector = connect(mapState,{startGame,stopGame,setName,resetGame,saveScore})
type PropsFromRedux = ConnectedProps<typeof connector>


export default withCookies(connector(Game));
