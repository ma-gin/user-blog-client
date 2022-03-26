import React, { Component } from "react"
import { Container, Navbar, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./styles.css"

export default class NavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" className="blog-navbar" fixed="top">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/">
            <img
              className="blog-navbar-brand"
              alt="logo"
              src="https://i.pinimg.com/736x/5e/b9/24/5eb924aee830d769dff1ad0997a99d25.jpg"
            />
          </Navbar.Brand>
          <div className="d-flex mx-auto mx-md-0">
            <Button
              as={Link}
              to="/new"
              className="blog-navbar-add-button bg-dark d-flex align-items-center"
              size="lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-lg me-1"
                viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
              </svg>
              Post Article
            </Button>
            <Button
              as={Link}
              to="/newAuthor"
              className="blog-navbar-add-button ms-2"
              size="lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus-lg"
                viewBox="0 0 16 16">
                <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
              </svg>
              Sign Up
            </Button>
          </div>
        </Container>
      </Navbar>
    )
  }
}
