import React, {useState} from 'react'
import {Wheel} from './components/Wheel/Wheel'
import Draggable from 'react-draggable'
const App = () => {
  const [show, setShow] = useState(false)
  eventLogger = (e, data) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  function handleDrag(e){
    console.log(e, `Handle Drag`)
  }

  function handleStop(e){
    console.log(e, `handle Stop`)
  }

  function handleStart(e){
    console.log(e, `Handle strat`)
  }

  return (
    <>
    <div className={show ? 'wheelContainer show' : 'wheelContainer' }>
    <Wheel/>
    <Draggable
    handle=".handle"
    defaultPosition={{x: 1000, y: 0}}
    position={null}
    grid={[25, 25]}
    scale={1}
    onStart={handleStart}
    onDrag={handleDrag}
    onStop={handleStop}>
    <div>
      <button onClick={()=>{setShow(!show)}} className="handle">Drag from here</button>

    </div>
    
  </Draggable>
  </div>
  </>
  )
}

export default App