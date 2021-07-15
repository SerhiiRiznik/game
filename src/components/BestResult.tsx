import React from "react"
import { convertTime } from "../selectors"


function BestResult(props:any) {
   let items = {...localStorage}
   return (
      <main className='container'>
         <ul>
            {
            Object.entries(items).map(([key, val]:any, i) => {
               let convertVal =  convertTime(val)
               return(
                  <li key={i}>
                     {key}: {convertVal}
                  </li>
               )
            })}
         </ul>
        
      </main>
   )
}

export default BestResult