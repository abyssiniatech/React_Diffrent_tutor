import { useContext } from "react"
import { userContext } from "./Usecontext"
function ContextA() {
    const user=useContext(userContext)
  return (
    <div>contextA
<div>{user}</div>
    
    </div>
  )
}

export default ContextA