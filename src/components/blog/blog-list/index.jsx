import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import BlogItem from "../blog-item"
// import posts from "../../../data/posts.json"

export default class BlogList extends Component {
  state = { posts: [] }

  // fetchURL = process.env.REACT_APP_POSTS_URL

  fetchData = async () => {
    try {
      // const { REACT_APP_POSTS_URL } = process.env
      // console.log(process.env.REACT_APP_POSTS_URL)
      const response = await fetch(`http://localhost:3001/posts`)
      const data = await response.json()

      if (response.ok) {
        this.setState({ posts: data })
        // console.log(data)
        console.log(this.state.posts)
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount = () => {
    this.fetchData()
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState === this.state.posts) {
      this.fetchData()
    }
  }
  render() {
    return (
      <Row>
        {this.state.posts &&
          this.state.posts.map((post) => (
            <Col md={4} style={{ marginBottom: 50 }}>
              <BlogItem key={post.id} {...post} />
            </Col>
          ))}
      </Row>
    )
  }
}
