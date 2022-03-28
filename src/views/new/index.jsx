import React, { Component } from "react"
import "react-quill/dist/quill.snow.css"
import ReactQuill from "react-quill"
import { Container, Form, Button } from "react-bootstrap"
import "./styles.css"

export default class NewBlogPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      authors: [],
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  componentDidMount() {
    this.fetchAuthors()
  }

  fetchAuthors() {
    fetch("http://localhost:3001/authors")
      .then((res) => res.json())
      .then((authors) => this.setState({ authors: authors }))
      .catch((error) => console.log(error.message))
  }

  render() {
    return (
      <Container className="new-blog-container">
        <Form className="mt-5">
          <Form.Group controlId="blog-author" className="mt-3">
            <Form.Label>Author</Form.Label>
            <Form.Control size="lg" as="select">
              {this.state.authors.map((author) => (
                <option
                  key={author.id}>{`${author.name} ${author.surname}`}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="blog-form" className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control size="lg" placeholder="Title" />
          </Form.Group>
          <Form.Group controlId="blog-category" className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control size="lg" as="select">
              <option>Technology</option>
              <option>Health & Fitness</option>
              <option>Finance</option>
              <option>Self Improvement</option>
              <option>Revolution</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="blog-content" className="mt-3">
            <Form.Label>Blog Content</Form.Label>
            <ReactQuill
              value={this.state.text}
              onChange={this.handleChange}
              className="new-blog-content"
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
      </Container>
    )
  }
}
