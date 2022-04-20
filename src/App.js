import React, { useState } from "react"
import Nav from "./components/navbar"
import Footer from "./components/footer"
import Home from "./views/home"
import Blog from "./views/blog"
import NewBlogPost from "./views/new"
import NewAuthor from "./views/author/index.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Modal from "./components/modal/modal"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [posts, setPosts] = useState([])
  const [searched, setSearched] = useState([])

  const handleOpen = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <BrowserRouter>
      <Nav searched={setSearched} handleOpen={handleOpen} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home setPosts={setPosts} posts={posts} searched={searched} />
          }
        />
        <Route path="/posts/:id" element={Blog} />
        <Route path="/new" element={NewBlogPost} />
        <Route path="/newAuthor" element={NewAuthor} />
        <Route path="/modal" element={Modal} />
      </Routes>
      <Footer />
      {showModal && <Modal handleClose={handleClose} />}
    </BrowserRouter>
  )
}

export default App
