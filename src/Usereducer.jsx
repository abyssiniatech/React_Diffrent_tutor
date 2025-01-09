import { useReducer } from "react"

const intialstate=0
const reducer=(state,action)=>{
    switch(action){
        case "increment":
            return state+1
        case "decrement":
            return state-1
        case "reset":
            return intialstate
        default:
            return state
    }
}
function Usereducer() {
    const [value,dispatch]=useReducer(reducer,intialstate)
  return (
    <div>
    <p>Usereducer</p>
    <p>{value}</p>
    <button onClick={()=>dispatch("decrement")}>-</button>
    <button onClick={()=>dispatch("increment")}>+</button>
    <button onClick={()=>dispatch("reset")}>0</button>
    </div>
  )
}

export default Usereducer