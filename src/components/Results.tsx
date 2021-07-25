import React from 'react'
import { convertTime } from '../selectors';
type ownProps ={
   name: string & any
   result: {
     results: string[]
   }
}
export const Results:React.FC<ownProps> = ({result,name, ...props}) => {
   return (
      <aside className='col-lg-3' style={{minWidth: '180px'}}>
         <div className='m-2 p-2 bg-dark'>
            <h3>Reaction Time</h3>
            <table className='table table-dark table-striped'>
               <tbody>
                  {
                     result.results.map((e,index)=>{ 
                     const res = convertTime(e)
                     return(
                        <tr  key={index}>
                           <td>Reaction Time</td>
                           <td><b>{res}</b></td>
                        </tr>
                     )
                     })
                  }
               </tbody>
               
            </table>
         </div>
      </aside>
   )
};
