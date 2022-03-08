import React, { Component } from "react"
import { Container } from "react-bootstrap"
import BlogList from "../../components/blog/blog-list"
import "./styles.css"

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      status: "In progression...",
    }
  }

  componentDidMount() {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3003/posts/")
        if (response.ok) {
          const data = await response.json()
          setPosts(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchPosts()
  }
  render() {
    return (
      <Container fluid="sm">
        <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        <BlogList />
      </Container>
    )
  }
}
