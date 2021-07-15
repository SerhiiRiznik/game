
import React from 'react';
import '../../node_modules/react-vis/dist/style.css'
import {XYPlot, XAxis, LineSeries,MarkSeries} from 'react-vis';
const data = [
      {x: 0, y: 0},
      {x: 25, y: 0},
      {x: 50, y: 0},
      {x: 75, y: 0.2},
      {x: 100, y: 0.4},
      {x: 125, y: 1.5},
      {x: 150, y: 6},
      {x: 175, y: 15},
      {x: 200, y: 19},
      {x: 225, y: 18},
      {x: 250, y: 13},
      {x: 275, y: 7},
      {x: 300, y: 3.4},
      {x: 325, y: 2.4},
      {x: 350, y: 2},
      {x: 375, y: 1.6},
      {x: 400, y: 1.2},
      {x: 425, y: 0.8},
      {x: 450, y: 0.5},
      {x: 475, y: 0.1},
    ];
    const dataUserTest = [
      {x: 0, y: 0},
      {x: 25, y: 0},
      {x: 50, y: 0},
      {x: 75, y: 0},
      {x: 100, y: 0},
      {x: 125, y: 1},
      {x: 150, y: 2},
      {x: 175, y: 6},
      {x: 200, y: 9},
      {x: 225, y: 15},
      {x: 250, y: 13},
      {x: 275, y: 7},
      {x: 300, y: 3.4},
      {x: 325, y: 2.4},
      {x: 350, y: 2},
      {x: 375, y: 1},
      {x: 400, y: 1},
      {x: 425, y: 0},
      {x: 450, y: 0},
      {x: 475, y: 0},
    ];
 
    let numbers =[]
    for(let i=0; i<500; i++) 
       {
         if (i%25 === 0) {
           numbers.push(i)
         }
       }
class Statistics extends React.Component {
   
  render() {

    return (
      <>
        <XYPlot height={300} width={500} xDomain={[0,475]} yDomain={[0,20]} 
        className='col-6 m-3 shadow rounded bg-dark'
        style={{maxWidth: '500px'}}>
        <XAxis 
          tickFormat={v => `${v}ms` }
          tickLabelAngle={-30}
          position={'middle'}
          hideLine
          tickValues={numbers}
        />
          <LineSeries data={data} curve="curveNatural" color='#2b87d1'/>
          <MarkSeries data={data} stroke='#2b87d1' color='#18191a' strokeWidth={1.5}/>
          {/* <LineSeries data={dataUserTest} curve="curveNatural" color='#2b87d1'/>
          <MarkSeries data={dataUserTest} stroke='#2b87d1' color='#18191a' strokeWidth={1.5}/> */}
        </XYPlot>
      </>
    );
  }
}

export default Statistics;