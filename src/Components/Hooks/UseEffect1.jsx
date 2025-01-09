
import { useEffect,useState } from "react"
function UseEffect() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
    document.title=`Hello react ${count}`
    
    },[count])
     const handleIncrement=()=>{
   
        setCount(c=>c+1)
     }
     const handleDecrement=()=>{
        setCount(c=>c-1)
     }
     const handleReset=()=>{
        setCount(c=>c*0)
     }
  return (
    <div>
        <p>UseEffect</p> 
        <p>{count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleReset}>0</button>
    </div>
  )
}

export default UseEffect