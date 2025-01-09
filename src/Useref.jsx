import { useRef,useEffect } from "react"


 
function Useref() {
    const ref=useRef()
    useEffect(()=>{
    
     })
  return (
    <div>
    <p>Useref</p>
    <input type="text"  ref={ref}/>
    </div>
  )
}

export default Useref