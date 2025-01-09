import { useState } from "react"

// useState Hooks
function Lab1() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleNme=(e)=>{
       setName(e.target.value)
    }
    const emailHandle=(e)=>{
       setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
    setPassword(e.target.value)
    }
    const handleForm=(e)=>{
        e.preventDefault()
    }
  return (
    <div>
     <p>Name:{name}</p>
     <p>Email:{email}</p>
     <p>Password:{password}</p>
    <form onSubmit={handleForm}>
    <div>
    Name:
     <input type="text" onChange={handleNme} />
    </div>
    <div>
    Email:
    <input type="email"  onChange={emailHandle}/>
    </div>
    <div>
      Password:
    <input type="password" onChange={handlePassword}  />
    </div>
    <div>
    <button>Submit</button>
    </div>
    </form>
    </div>
  )
}

export default Lab1