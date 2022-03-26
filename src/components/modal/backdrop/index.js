import React from "react"
import "./styles.css"

function Backdrop({ children, onClick }) {
  console.log("hello")
  return (
    <div className="backdrop" onClick={onClick}>
      {children}
    </div>
  )
}

export default Backdrop
