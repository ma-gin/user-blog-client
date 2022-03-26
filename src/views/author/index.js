import React, { useState } from "react"
import { Container, Form, Button } from "react-bootstrap"
import "./styles.css"

export default function NewAuthor() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")

  const createAuthor = async (e) => {
    e.preventDefault()
    const newAuthor = { name, surname, email }
    console.log(newAuthor)
    try {
      let response = await fetch("http://localhost:3001/authors", {
        method: "POST",
        body: JSON.stringify(newAuthor),
        headers: {
          "Content-type": "application/json",
        },
      })
      if (response.ok) {
        console.log(response)
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
      console.log(error)
    }
  }

  return (
    <Container className="new-author-container">
      <Form className="mt-5" onSubmit={(e) => createAuthor(e)}>
        <Form.Group controlId="name" className="mt-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label>Surname</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Surname"
            onChange={(e) => setSurname(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="author-email" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            size="lg"
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="author-img" className="mt-3">
          <Form.Label>Profile Image</Form.Label>
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
    </Container>
  )
}
