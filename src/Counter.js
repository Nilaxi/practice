import React, { useState } from 'react'

 export default function Counter() {
    const [counter,setCounter]  = useState(0);
    const incr = () => {
        setCounter(counter+1);
        console.log(Counter);
    }
    const sub = () => {
        setCounter(counter-1);
        console.log(Counter);
    }
    const multiply = () => {
        setCounter(counter*2);
        console.log(Counter);
    }
    
  return (
    <div>{counter}
    <button onClick={incr}>+</button>
    <button onClick={sub}>-</button>
    <button onClick={multiply}>*</button>

    </div>
    
  )
}

