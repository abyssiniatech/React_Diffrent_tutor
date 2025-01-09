import axios from 'axios';
import { useEffect, useState } from 'react';
function UseEffect_api() {
    const [value,setValue]=useState([])
    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(response=>{
        setValue(response.data)
        console.log(response.data)
       })
       .catch(error=>{
        console.log("errors are happend",error)
       })
    },[])
  return (
    <div>
    <p>
     fetch Api from json placeholder
    </p>
    {value.map((list)=>{
        return <p key={list.id}>{list.title}</p>
    })}

    </div>
  )
}

export default UseEffect_api