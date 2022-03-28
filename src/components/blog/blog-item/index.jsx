import React, { Component } from "react"
// import BlogAuthor from "../blog-author"
import { Link } from "react-router-dom"
import "./styles.css"

export default class BlogItem extends Component {
  render() {
    const { title, cover, author, content, _id } = this.props
    return (
      <Link to={`/blog/${_id}`} className="blog-link">
        <div className="d-flex w-100 blog-item">
          <img className="blog-cover me-4" src={cover} alt="alt" />
          <div className="d-flex flex-column">
            <div className="title my-4 fw-bold">{title}</div>
            <div className="content">{content}</div>
            <div className="author my-3">{`${author.name} ${author.surname}`}</div>
          </div>
        </div>
      </Link>
    )
  }
}
