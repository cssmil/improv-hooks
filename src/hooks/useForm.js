import { useState } from "react"

export const useForm = (initialForm = {}) => {

  const [ formState, setFormstate ] = useState(initialForm)

  const onChangeInput =( { target } )=> {
    const { name, value } = target
    setFormstate({
      ...formState,
      [ name ] :  value
    })
  }

  const onResetForm = () => {
    setFormstate(initialForm)
  }

  return ({
    ...formState,
    formState,
    onChangeInput,
    onResetForm
  })
}


