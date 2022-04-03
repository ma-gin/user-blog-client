import React, { Component } from "react"
import { Button, Container, Image } from "react-bootstrap"
import { withRouter } from "react-router"
import BlogAuthor from "../../components/blog/blog-author"
import BlogLike from "../../components/likes/BlogLike"
import "./styles.css"

class Blog extends Component {
  state = {
    blog: {},
    loading: true,
  }

  componentDidMount() {
    const fetchPost = (id) => {
      // fetch(`${process.env.REACT_APP_POSTS_URL}/${id}`)
      fetch(process.env.REACT_APP_POSTS_URL + id)
        .then((res) => res.json())
        .then((post) => this.setState({ blog: post, loading: false }))
        .catch((error) => console.log(error.message))
    }
    const { id } = this.props.match.params
    fetchPost(id)
  }

  render() {
    const { loading, blog } = this.state
    if (loading) {
      return <div>loading</div>
    } else {
      return (
        <div className="blog-details-root">
          <Container>
            <Image className="blog-details-cover" src={blog.cover} fluid />
            <h1 className="blog-details-title">{blog.title}</h1>

            <div className="blog-details-container">
              <div className="blog-details-author">
                <BlogAuthor {...blog.author} />
              </div>
              <div className="blog-details-info">
                <div>{blog.createdAt}</div>
                {/* <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div> */}
                <div style={{ marginTop: 20 }}>
                  <BlogLike defaultLikes={["123"]} onChange={console.log} />
                </div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
          </Container>
          <Button className="pdf-btn mx-auto">Print PDF</Button>
        </div>
      )
    }
  }
}

export default withRouter(Blog)
