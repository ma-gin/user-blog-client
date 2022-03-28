import React from "react"
import { Container } from "react-bootstrap"
import BlogList from "../../components/blog/blog-list"
import "./styles.css"

export default function Home() {
  return (
    <Container fluid="sm">
      <h1 className="blog-main-title">Recent Articles</h1>
      <BlogList />
    </Container>
  )
}
