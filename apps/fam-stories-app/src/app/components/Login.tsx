import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector, batch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/utils";
import user from "../store/user";
import { AddButton, ThirdTitle } from "./GlobalStyles";
import { ClonedFamForm } from "../pages/LogInPage";

const LogIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState("login")
  //const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const accessToken = useSelector((state) => store.user.accessToken)
  const error = useSelector((state) => store.user.error)
  console.log(error)

  useEffect(() => {
    if(accessToken) {
      navigate("/main")
    }
  }, [accessToken, navigate])

  const onFormSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({username: username, password: password})
    }
    fetch(API_URL(mode), options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.sucess) {
          batch(() => {
            dispatch(user.actions.setUsername(data.response.username))
            dispatch(user.actions.setAccessToken(data.response.accessToken))
            dispatch(user.actions.setUserId(data.response.id))
            dispatch(user.actions.setError(null))
          })
        } else {
          batch(() => {
            dispatch(user.actions.setUsername(null))
            dispatch(user.actions.setAccessToken(null))
            dispatch(user.actions.setUserId(null))
            dispatch(user.actions.setError(data.response))
          })
        }
      })
  }

  return (
    <FormSection>
      {mode === "login" && <ThirdTitle>Log in</ThirdTitle>}
      {mode === "register" && <ThirdTitle>Register</ThirdTitle>}
      <Form onSubmit={onFormSubmit}>
          <label htmlFor="username">Username</label>
          <input 
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <ClonedFamForm>
            {mode === "login" && <AddButton type="submit">Log in</AddButton>}
            {mode === "register" && <AddButton type="submit">Register</AddButton>}
          </ClonedFamForm>
      </Form>
      <div>
        <label htmlFor="register">Register</label>
        <input type="radio" id="register" checked={mode === "register"} onChange={() => setMode("register")} />
        <label htmlFor="login">Login</label>
        <input type="radio" id="login" checked={mode === "login"} onChange={() => setMode("login")} />
      </div>
    </FormSection>
  )
}
export default LogIn

export const FormSection = styled.section`
  background-color: pink;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-weight: 700;
    font-size: 45;
    margin-bottom: 20px;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 5px;
  input {
    padding: 15px;
    margin: 5px;
    border-radius: 10px;
    border: none;
  }
`