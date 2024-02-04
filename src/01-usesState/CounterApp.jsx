import { useState } from "react"

export const CounterApp = () => {
  
  const [ state, setCounter ] = useState ({
    counter1 : 10,
    counter2 : 20,
    counter3 : 30,
  })
  
  const { counter1, counter2, counter3 } = state

  return (
    <>
      <h2>CounterApp</h2>
      <h3>Contador1: {counter1}</h3>
      <h3>Contador2: {counter2}</h3>
      <h3>Contador3: {counter3}</h3>
      <button onClick={() => 
        setCounter({
          ...state,
          counter2: counter2 + 1
        })}
      > 
        +1
      </button>
    </>
  )
}
