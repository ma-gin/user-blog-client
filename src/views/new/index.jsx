import React, { useState, useEffect } from "react"
import "react-quill/dist/quill.snow.css"
import ReactQuill from "react-quill"
import { Container, Form, Button } from "react-bootstrap"
import "./styles.css"

export default function NewBlogPost() {
  const [content, setContent] = useState("")
  const [authors, setAuthors] = useState([])
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("Technology")

  useEffect(() => {
    fetchAuthors()
  }, [])

  const handleContent = (content, delta, source, editor) => {
    // console.log(editor.getHTML())
    // console.log(editor.getText())
    setContent(editor.getHTML())
  }

  const findAuthor = (value) => {
    const selectedAuthor = value.split(" ")
    const chosenAuthor = authors.find(
      (item) =>
        item.name === selectedAuthor[0] && item.surname === selectedAuthor[1]
    )
    setAuthor(chosenAuthor.id)
  }

  const fetchAuthors = () => {
    fetch(process.env.REACT_APP_AUTHORS_URL)
      .then((res) => res.json())
      .then((authors) => setAuthors(authors))
      .catch((error) => console.log(error.message))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = { title, category, author, content }
    const request = {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-type": "application/json",
      },
    }
    try {
      const response = await fetch("http://localhost:3001/posts", request)
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
      console.log(error)
    }
  }

  return (
    <Container className="new-blog-container">
      <Form className="mt-5" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="blog-author" className="mt-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            size="lg"
            as="select"
            onChange={(e) => findAuthor(e.target.value)}
            defaultValue={"Please Choose"}>
            {authors &&
              authors.map((author) => (
                <option
                  key={author.id}>{`${author.name} ${author.surname}`}</option>
              ))}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            size="lg"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            size="lg"
            as="select"
            onChange={(e) => setCategory(e.target.value)}>
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
            value={content}
            onChange={handleContent}
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
