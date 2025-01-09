import { createContext, useState } from "react"
import ContextA from "./contextA"
export const userContext=createContext()
function Usecontext() {
    const [name,setName]=useState("Surafel")
    
  return (
    <div>
    <userContext.Provider value={name}>

       <p>Usecontext</p>
       <ContextA />
       
    </userContext.Provider>

       
    </div>
  )
}

export default Usecontext
