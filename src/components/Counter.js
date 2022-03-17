import React,{useState} from 'react'

const Counter = () => {
    const[count,setCount]=useState(0)
   const [inputVal,setInputVal]=useState(1)

  return (
<>
<h1 data-testid="header">My count</h1>
<h3 data-testid='counter'>{count}</h3>

<button  data-testid="add-btn"onClick={()=>setCount(count+1)}>+</button>
<input 
data-testid="input"
type='number'
value={inputVal}
className='text'
onChange={(e)=>setInputVal(e.target.value)}
/>
<button data-testid="subb-btn"onClick={()=>setCount(count-1)}>-</button>

</>
  )
}

export default Counter