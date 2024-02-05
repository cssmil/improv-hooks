import { useState } from "react"

export const useCounter = (num = 12) => {
  
  const [ value, setValue ] = useState(num)

  const sum = () => {
    setValue( value + 1 )
  }

  const reset = () => {
    setValue( num )
  }

  const decr = () => {
    setValue( value - 1 )
  }
  
  return ({
    value,
    sum,
    reset,
    decr
  })
}
