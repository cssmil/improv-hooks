import React from "react"

export const ShowIncrement = React.memo(({btnIncrement}) => {
  console.log('me volvi a renderizar 😀')
  return (
    <button onClick={()=>btnIncrement(5)}>
      Incrementar
    </button>
  )
})
