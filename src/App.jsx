import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[hour, setHour]=useState(2);
  const[min, setMin]=useState(3);
  const[sec, setSec]=useState(4);

  return (
    <div className="App">
      <Timer hour={hour} min={min} sec={sec}/>
    </div>
  );
}
function Timer(props) {
  return (
    <>
      <div className='timer'>
        <div className="timer_inner">

          <div className='watch'>
            <span>hour:{props.hour}</span>
            <span>min:{props.min}</span>
            <span>sec:{props.sec}</span>
          </div>
          <button onClick={()=>{
            {setHour(hour+1)
              setHour(hour+1)
              setHour(hour+1)}
          }}>start</button>
          <button>stop</button>
          <button>reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
