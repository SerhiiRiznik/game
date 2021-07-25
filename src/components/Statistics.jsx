
import React from 'react';
import '../../node_modules/react-vis/dist/style.css'
import {XYPlot, XAxis, LineSeries} from 'react-vis';
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
      {x: 350, y: 1.9},
      {x: 375, y: 1.5},
      {x: 400, y: 1.1},
      {x: 425, y: 0.7},
      {x: 450, y: 0.35},
      {x: 475, y: 0.2},
      {x: 500, y: 0.1},
      {x: 525, y: 0.11},
      {x: 550, y: 0.111},
      {x: 1000, y: 0},
    ];
const Statistics = (props)=> {
  const number = []
    for (let i = 0; i <=1000; i++) {
      if (i%50 === 0) {
          number.push(i)
      }
    }
    return (
      <>
        <XYPlot height={350} width={500}  
        className='col-6 flex-fill m-3 shadow rounded bg-dark'
        style={{maxWidth: '500px',margin: '0 auto'}}
        >
        <XAxis 
          tickFormat={v => `${v}ms` }
          tickLabelAngle={-25}
          position={'middle'}
          hideLine
          tickValues={number}
        />
        <XAxis 
        style={{
          fontSize: 9,
          stroke: 'white'
        }}
        tickFormat={v => `${v}ms` }
          top={325}
          hideLine
          tickValues={props.result.result.test}
        />
          <LineSeries data={data} curve="curveNatural" color='#62aeec'/>
        </XYPlot>
      </>
    );
}

export default Statistics;