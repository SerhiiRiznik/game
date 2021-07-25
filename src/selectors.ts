import { RootState } from './reducers/store';

export function getMinResults(state:RootState) {
  // @ts-ignore
  return Math.min(...state.gameReducer.result.results)
}




export function convertTime(e:any) {
   e = e /  1000;
   let pad = function(num:number, size:number) { return ('000' + num).slice(size * -1); }
   let time:any = parseFloat(e).toFixed(3) 
   let minutes:any = Math.floor((time) / 60) % 60
   let seconds:any = Math.floor(time - minutes * 60)
   let milliseconds:any = time.slice(-3)
   return  pad(minutes, 2)+':' +pad(seconds, 2)+":" + pad(milliseconds, 3)
}



// export const useDidMountEffect = (func:any, deps:any) => {
//     const didMount = useRef(false);

//     useEffect(() => {
//         if (didMount.current) func();
//         else didMount.current = true;
//     }, deps);
// }


export const getRandomInt=(min:number, max:number)=> {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min )
}