import React from "react"
// import BlogAuthor from "../blog-author"
import { Link } from "react-router-dom"
import "./styles.css"

export default function BlogItem(props) {
  const { title, cover, author, content, id } = props
  return (
    <Link to={`/posts/${id}`} className="blog-link">
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
