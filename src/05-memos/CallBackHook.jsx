import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallBackHook = () => {

  const [counter, setCounter]  = useState(12)
  
  // const btnIncrement = () => {
  //   setCounter( counter + 1 )
  // }

  const btnIncrement = useCallback(
    (num) => {
      setCounter((value) => value + num)
    },
    [],
  )
  
  return (
    <>
      <h1>CallBackHook</h1>
      <h3>{counter}</h3>
      <ShowIncrement btnIncrement={btnIncrement} />
    </>
  )
}
