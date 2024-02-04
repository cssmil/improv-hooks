import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

  const [ formState, setFormstate] = useState({
    username: 'Johnson',
    email: 'johnson@hotmail.com',
  })

  const {username, email} = formState

  const onChangeInput =( { target } )=> {
    const {name, value} = target
    setFormstate({
      ...formState,
      [ name ] :  value
    })
  }

  useEffect(() => {
    console.log('useEffect called')
  }, []);

  useEffect(() => {
    console.log('formState change !')
  }, [formState]);

  useEffect(() => {
    console.log('email change !')
  }, [email]);

  return (
    <>
      <h5>SimpleForm</h5>
      <hr />

      <input
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onChangeInput}
      />

      <input
        type="email"
        placeholder="johnson@hotmail.com"
        name="email"
        value={email}
        onChange={onChangeInput}
      />
      <hr/>

      {
        username === 'message' && <Message />
      }
      
    </>
  )
}

