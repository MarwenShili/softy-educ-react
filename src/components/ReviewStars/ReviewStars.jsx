import React, { useState } from "react"
import "./ReviewStars.css"

const ReviewStars = ({ existRating, onStarClick }) => {
  const [rating, setRating] = useState(existRating || null)
  const stars = [1, 2, 3, 4, 5]

  const handleStarClick = star => {
    onStarClick(star)
    setRating(star)
  }

  return (
    <div className='review-stars'>
      {stars.map(star => (
        <span
          key={star}
          className={`review-stars__star ${star <= rating ? "is-active" : ""}`}
          onClick={() => handleStarClick(star)}
          onMouseEnter={() => handleStarClick(star)}>
          ★
        </span>
      ))}
    </div>
  )
}

export default ReviewStars
