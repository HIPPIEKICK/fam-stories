import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { batch} from "react-redux";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useNavigate } from "react-router-dom";
import user from "../store/user";
import { AddButton, BodyText, Devices, Input, Label, ThirdTitle } from "./GlobalStyles";
import { EditFamForm } from "../pages/EditProfilePage";

const LogIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState("login")
  //const [loginError, setLoginError] = useState("");
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const accessToken = useAppSelector((store) => store.user.accessToken)
  const error = useAppSelector((store) => store.user.error)
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
          //alert("error, it seams that you haven't registerd yet")
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
    <LoginForm>
      <ThirdTitle>{mode === "register" && "Register" || "Log in"}</ThirdTitle>
      <Form onSubmit={onFormSubmit}>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" placeholder="username" value={username}
                onChange={(e) => setUsername(e.target.value)} />
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" placeholder="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
      </Form>
          <InfoMsg>
            {mode === "register" && password.length < 8 ? 'minimum 8 characters required' : ''}
          </InfoMsg>
          <Bwrapper>
            {mode === "login" && <AddButton type="submit">Log in</AddButton>}
            {mode === "register" && <AddButton type="submit">Register</AddButton>}
          </Bwrapper>
          <Label>
            <ModeLabel htmlFor="register">{mode === "register" ? "" : "No acount? Register here" }
            <Input type="radio" id="register" name="register" checked={mode === "register"} onChange={()=> setMode("register")}/>
            </ModeLabel>
            <ModeLabel htmlFor="login">{mode === "login" ? "" : "Log in now" }
            <Input type="radio" id="login" checked={mode === "login" } onChange={()=> setMode("login")}/> 
            </ModeLabel>
          </Label>    
    </LoginForm>
  )
}
export default LogIn

export const LoginForm = styled(EditFamForm)`
  position: relative;
  bottom: 3.5em;
  left: 2.5em;
  padding: 0em 1em;
  width: 16em;
  height: 26em;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: none;
  border: 2px dotted var(--color-darkerRed);
  opacity: 0.95;
  z-index: 15;

@media ${Devices.tablet} {
    bottom: 10em;
    left: 8em;
    margin: 0em;
    }
    
@media ${Devices.laptop} {
    bottom: 6em;
    left: 65%;
    }    

@media ${Devices.desktop} {
    bottom: 20em;
    left: 110%;
    }   
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  //border: 2px solid green;
`

export const InfoMsg = styled(BodyText)`
color: #57930c;
font-style: italic;
margin-bottom: 0.25em;
//border: 2px solid green;
`
export const ModeLabel = styled.label`
color:var(--color-darkerRed);
font-size: 1.1rem;
font-weight: 600;
//border: 2px solid green;
` 
const Bwrapper = styled.div`
  display: block;
  align-items: flex-end;
  justify-content: center;
  //border: 2px solid green;
`

function API_URL(mode: string): RequestInfo | URL {
  throw new Error("Function not implemented.");
}
