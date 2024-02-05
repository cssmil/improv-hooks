import React from "react";
//import { memo } from "react"

export const Small = React.memo(({count}) => {
  console.log('me renderizé');
  return (
    <h1>{count}</h1>
  )
})
