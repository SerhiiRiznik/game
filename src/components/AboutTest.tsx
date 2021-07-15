import Statistics from "./Statistics";

export default function AboutTest(props:any) {
   return (
      // <div className=' '>
      <div className='d-flex flex-wrap justify-content-between'>
         <Statistics/>
         <div style={{minWidth: '500px'}} className='col-6 m-4 p-3 shadow rounded bg-dark '>
            <h2>About the test</h2>
            <p>This is a simple tool to measure your reaction time.</p>
            <p>The average (median) reaction time is 273 milliseconds, according to the data collected so far.</p>
            <p>In addition to measuring your reaction time, this test is affected by the latency of your computer and monitor. Using a fast computer and low latency / high framerate monitor will improve your score.
            </p>
            <p>Scores in this test are faster than the aim trainer test, because you can react instantly without moving the cursor.
            </p>
            <p>This is discused in further detail on the the statistics page. While an average human reaction time may fall between 200-250ms, your computer could be adding 10-50ms on top. Some modern TVs add as much as 150ms!
            </p>
            <p>If you want, you can keep track of your scores, and see your full history of reaction times.
            </p>
            <p>Just perform at least 3 clicks and then save.
            </p>
         </div>
         
      </div>
   )
};
