import React, {useState} from "react"

const CounterApp = ()=>{

  const [count,setCount] = useState(0)
  const [error,setError] = useState("")

  const increment = ()=>{
    setCount(c => c + 1)   
    setError("")
  }

  const decrement = ()=>{
    if(count>0){
      setCount(c=>c-1)
      setError("")
    }else{
      setError("Count cannot be less than 0")
    }
  }

  return(
    <div style={{textAlign:"center",marginTop:"50px"}}>
      <h2>Counter App</h2>
      <h1>{count}</h1>
      {/* <button onClick={increment} style={{margin:"5px", padding:"2px",borderRadius: "4px"}}>Increment</button>
      <button onClick={decrement} style={{margin:"5px", padding:"2px",borderRadius: "4px"}}>Decrement</button> */}
      <button className="btn btn-primary me-2" onClick={increment}>Increment</button>
<button className="btn btn-danger" onClick={decrement}>Decrement</button>

      {/* {error && <p style={{color:"red"}}>{error}</p>} */}
      {error && <p className="text-danger mt-2">{error}</p>}

    </div>
  )
}

export default CounterApp;
