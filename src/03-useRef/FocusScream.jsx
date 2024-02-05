import { useRef } from "react"

export const FocusScream = () => {

  const inputRef = useRef()

  const btnClick = () => { 
    inputRef.current.select()
    console.log(inputRef.current)
  }

  return (
    <>
      <div>FocusScream</div>
      <input
        ref={inputRef}
        type = "text"
        placeholder="Ingrese nombre"
      />
      <button onClick={btnClick}>
        Set focus
      </button>
    </>
  )
}
