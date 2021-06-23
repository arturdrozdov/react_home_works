import './App.css';
import { useEffect, useState } from 'react';
function App() {



  return (
    <div className="App">
      <Timer />

    </div>
  );
}


function Timer() {
  let [time, setTime] = useState(new Date());
  let [timerOn, setTimerOn] = useState(false);
  let [timers, setTimers] = useState([]);
  let hour = Math.floor(time / 3600000) % 24;
  let min = Math.floor(time / 60000) % 60;
  let sec = Math.floor(time / 1000) % 60;

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime(time => time - 10)
      }, 10)
    }

    return () => clearInterval(interval);
  })

  const addTime = (time) => {
    setTimers([...timers, time]);
    console.log(timers)
  }

  const RendTime = props => {
    return (
      props.data.map(t => <div>{Math.floor(t / 3600000) % 24}:{Math.floor(t / 60000) % 60}:{Math.floor(t / 1000) % 60}</div>)
    )
  }

  return (
    <>
      <div className='timer'>
        <div className="timer_inner">

          <div className='watch'>
            <span>hour:{hour}</span>
            <span>min:{min}</span>
            <span>sec:{sec}</span>
          </div>
          <button onClick={() => setTimerOn(true)}>start</button>
          <button onClick={() => { setTimerOn(false); addTime(time) }}>stop</button>
          <button onClick={() => { setTime(new Date()); setTimers([]) }}>reset</button>
          <RendTime data={timers} />
        </div>
      </div>
    </>
  );
}

export default App;


