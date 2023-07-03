import React from "react"
import Button from "../Button/Button"
import "./CallToAction.css"

const CallToAction = () => {
  const handleSubmit = e => {
    e.preventDefault()
    console.log("Submit subscription")
  }
  return (
    <div className='cta'>
      <p className='cta__subscribe'>Subscribe to our Newsletter</p>
      <form className='cta__form' onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Your Email Address'
          className='cta__form--input'
        />
        <Button classes={"cta__form--ibutton"}>Subscribe </Button>
      </form>
    </div>
  )
}

export default CallToAction
