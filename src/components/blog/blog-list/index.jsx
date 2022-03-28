import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import BlogItem from "../blog-item"
// import posts from "../../../data/posts.json"

export default class BlogList extends Component {
  state = { posts: [] }

  fetchData = async () => {
    const fetchURL = process.env.REACT_APP_POSTS_URL

    try {
      const response = await fetch(`${fetchURL}`)
      const data = await response.json()

      if (response.ok) {
        this.setState({ posts: data })
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
            <Col xs={12} key={post.id} style={{ marginBottom: 50 }}>
              <BlogItem {...post} />
            </Col>
          ))}
      </Row>
    )
  }
}
