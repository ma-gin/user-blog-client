import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import Backdrop from "../backdrop/index.js"
import "./styles.css"

export default function Modal({ handleClose }) {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = { name, surname, email, password }
    const request = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-type": "application/json",
      },
    }
    try {
      let response = await fetch(process.env.REACT_APP_USERS_URL, request)
      if (response.ok) {
      } else {
        alert("something went wrong")
        if (response.status === 400) {
          alert("bad request")
        }
        if (response.status === 404) {
          alert("page not found")
        }
      }
    } catch (error) {
      console.error(error)
    } finally {
      handleClose()
    }
  }

  return (
    <Backdrop onClick={handleClose}>
      <div onClick={(e) => e.stopPropagation()} className="author-modal">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group controlId="name" className="mt-1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              size="lg"
              placeholder="First Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label className="mt-2">Last Name</Form.Label>
            <Form.Control
              size="lg"
              placeholder="Last Name"
              onChange={(e) => setSurname(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="author-email" className="mt-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              size="lg"
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="author-email" className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              size="lg"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Backdrop>
  )
}
