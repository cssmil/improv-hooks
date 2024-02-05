import { CounterApp } from "./01-usesState/CounterApp"
import { CounterCustomHook } from "./01-usesState/CounterCustomHook"
import { MultipleCustomHooks } from "./02-useEffect/03-examples/MultipleCustomHooks"
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook"
import { Message } from "./02-useEffect/Message"
import { SimpleForm } from "./02-useEffect/SimpleForm"
import { FocusScream } from "./03-useRef/FocusScream"
import { CallBackHook } from "./05-memos/CallBackHook"
import { MemoHook } from "./05-memos/MemoHook";
import { Padre } from "./07-tarea-memo/Padre"

export const HooksApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      <Padre />
      {/* <CounterCustomHook /> */}
      {/* <CounterApp /> */}
      
    </>
  )
}
