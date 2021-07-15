import React from 'react'
import { convertTime } from '../selectors';
type ownProps ={
   name: string & any
   result: string[]
}
export const Results:React.FC<ownProps> = ({result,name}) => {
   return (
      <aside className='col-3' style={{minWidth: '180px'}}>
         <div className='m-2 p-2 bg-dark'>
            <h3>Results</h3>
            <ul className='list-group '>
               {
                  result.map((e,index)=>{ 
                  const res = convertTime(e)
                  return(<li className='list-group-item mr-5' key={index}>Reaction Time: <b>{res}</b></li>)
                  })
               }
            </ul>
         </div>
      </aside>
   )
};
