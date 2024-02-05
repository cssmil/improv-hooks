import { memo, useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"


const hardtest = (range) => {
  for (let i = 0; i < range; i++) {
    console.log('Ahí vamos...');
  }
  return `recorridfo Nº ${range}`

}


export const MemoHook = () => {

  const { value, sum } = useCounter( 500 )
  const [ show, setShow ] = useState( true )

  const memorizeHardTest = useMemo(()=>hardtest(value), [value])

  return (
    <>
      <div>Memorize</div>
      <Small count={value}/>
      <hr></hr>
      <h2>{ memorizeHardTest }</h2>
      <button onClick={sum}>+1</button>
      <button onClick={()=>setShow(!show)} className="outline">Show/Hide -  {JSON.stringify(show)}</button>

    </>
  )
}
