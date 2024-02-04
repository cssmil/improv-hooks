import { CounterApp } from "./01-usesState/CounterApp"
import { CounterCustomHook } from "./01-usesState/CounterCustomHook"
import { MultipleCustomHooks } from "./02-useEffect/03-examples/MultipleCustomHooks"
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook"
import { Message } from "./02-useEffect/Message"
import { SimpleForm } from "./02-useEffect/SimpleForm"

export const HooksApp = () => {
  return (
    <>
      <h1>HooksApp</h1>
      
      <MultipleCustomHooks />
      {/* <CounterCustomHook /> */}
      {/* <CounterApp /> */}
      
    </>
  )
}
