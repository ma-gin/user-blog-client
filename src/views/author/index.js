import React from "react"
import { Container, Form, Button } from "react-bootstrap"
import "./styles.css"

export default function NewAuthor() {
  const createAuthor = (e) => {
    e.preventDefault()
    console.log("created")
  }
  return (
    <Container className="new-author-container">
      <Form className="mt-5" onSubmit={(e) => createAuthor(e)}>
        <Form.Group controlId="author-name" className="mt-3">
          <Form.Label>Name</Form.Label>
          <Form.Control size="lg" placeholder="Name" />
          <Form.Label>Surnmae</Form.Label>
          <Form.Control size="lg" placeholder="Surname" />
        </Form.Group>
        <Form.Group controlId="author-email" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control size="lg" placeholder="Email" />
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
