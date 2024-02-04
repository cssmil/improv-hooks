import { useState } from "react"
import { useCounter } from "../hooks/useCounter"

export const CounterCustomHook = () => {

  const {value, sum, reset, decr} = useCounter(50)

  return (
    <>
      <h4>Contar:</h4>
      <h1>{value}</h1>
      <div className="flex">
        <button onClick={sum}>+1</button>
        <button onClick={reset}>RESET</button>
        <button onClick={decr}>-1</button>
      </div>
    </>
  )
}
