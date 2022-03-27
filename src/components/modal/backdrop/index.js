import React from "react"
import "./styles.css"

function Backdrop({ children, onClick }) {
  return (
    <div className="backdrop" onClick={onClick}>
      {children}
    </div>
  )
}

export default Backdrop
