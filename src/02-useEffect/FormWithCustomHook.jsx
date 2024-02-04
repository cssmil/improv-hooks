
import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

  const { formState, onChangeInput, username, email, password, onResetForm} = useForm({
    username: '',
    email: '',
    password: ''
  })

  useEffect(() => {
    console.log('useEffect called')
  }, []);

  useEffect(() => {
    console.log('formState change !')
  }, [formState]);

  useEffect(() => {
    console.log('email change !')
  }, [email]);

  useEffect(() => {
    console.log('password change !')
  }, [password]);



  return (
    <>
      <h5>Formulario con Custom Hook</h5>
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
      <input
        type="password"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onChangeInput}
      />
      <hr/>
      <button onClick={onResetForm}> Borrar</button>
    </>
  )
}

