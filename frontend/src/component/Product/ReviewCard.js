import React from 'react'
import profilePng from "../../images/Profile.png";

const ReviewCard = ({review}) => {

  return (
    <div>
         <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <p>{review.name}</p>
      {/* <Rating {...options} /> */}
      <span className="reviewCardComment">{review.comment}</span>
    </div>
    </div>
  )
}
export default ReviewCard
