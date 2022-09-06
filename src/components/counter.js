export default function Counter({counter, setCounter}){
  
  return(
    <>
    <h1>Increase or decrease the count</h1>
    <button onClick={()=>{
      setCounter((counter + 1))
    }}>+</button>
    <button onClick={() =>{
      setCounter((counter - 1))
    }}>-</button>
    </>
  )
}