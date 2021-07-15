
import React, { useEffect, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux';
import { startGame,stopGame,setName,resetGame} from '../reducers/gameReducer';
import { RootState } from '../reducers/store';
import { convertTime, getMinResults } from '../selectors';
import AboutTest from './AboutTest';
import { Results } from './Results';


const Game:React.FC<PropsFromRedux> = React.memo(({isStarted,result,startGame,stopGame,
  getBestResult, resetGame,step,setName,name,info,background}): JSX.Element=> {
   
   const [count, setCount] = useState<number>(0)

   function Start(params:any) {
      setCount(count+1)
      stopGame()
   }
   function Reset(params:any) {
      setCount(0)
      resetGame()
   }
   
   const currentResult = convertTime(result.currentResult)
   const bestResult = convertTime(getBestResult)

   return(
      <main className=' row text-light m-2'>
         <div className='d-flex  flex-wrap'>
            <div className='col-9  game' style={{minWidth: '500px'}}>
            {
             (!isStarted) &&
             <div className='card p-3 bg-dark'>
               {
               info.showMessage && 
                  <h2 className='card-title'>
                     {info.message}
                  </h2>
               }
               {
               step == 0 && 
                  <>
                  {count == 0 && <h2 className='card-title'>Reaction Time Test</h2>}
                     
                     <h6 className='p-2'>When the red box turns green, click as quickly as you can.</h6>
                 </> 
               }
                {/* {
                   (step === 0) && 
                   <input type='text' placeholder='Enter Your Name' name='name' value={name} onChange={(e)=>setName(e.target.value)} ></input>
                } */}
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
                <div className='card-Startter '>
                   {
                     (result.results.length === 3) ? 
                     <div>
                        <button className='btn btn-light' onClick={Reset}>Reset game</button>
                        <div>
                           <input type='text' placeholder='Enter Your Name' name='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
                           <button className='btn btn-light'>Save score</button>
                        </div>
                        

                     </div>
                     :<button className='btn btn-light' onClick={()=>startGame()}>
                        {step>=1 ? `Click to try again.` : `Click Here To Start Playing`}
                        </button>
                   }
                   
                </div>
             </div>
            }
            {
            isStarted ?
            <div  className={`game__wrap ${background}`} onClick={Start}>
            
                  {background == 'stoped' ? 
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
            :<div className={`game__gag `} >

            </div>
            }
         </div>
            <Results result={result.results} name={name} />
         </div>
         <div className='row'>
            <AboutTest/>
         </div>
      </main>
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


const connector = connect(mapState, {startGame,stopGame,setName,resetGame})
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Game)