import React from "react"
import "./Button.css"

const Button = ({ children, isSecondary, classes }) => {
  return (
    <button
      className={`button ${isSecondary && "secondary"} ${classes && classes}`}>
      {children}
    </button>
  )
}

export default Button
