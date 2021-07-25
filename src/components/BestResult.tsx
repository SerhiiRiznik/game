import React from "react"
import { convertTime } from "../selectors"


function BestResult(props:any) {
   let items = {...localStorage}
   return (
      <table className='table table-dark table-striped'>
         <thead>
            <tr>
               <th scope="col">#</th>
               <th scope="col">Name</th>
               <th scope="col">Result</th>
            </tr>
         </thead>
         <tbody>
         {
         Object.entries(items).map(([name, val]:any, index) => {
            let convertVal =  convertTime(val)
            return(
               <tr key={index}>
                  <th scope='row' >{index+1}</th>
                  <td>{name}</td>
                  <td>{convertVal}</td>
               </tr>
            )
         })}
         </tbody>
      </table>
   )
}

export default BestResult