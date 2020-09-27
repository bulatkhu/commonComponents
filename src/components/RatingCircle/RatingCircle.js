import React from 'react'
import './RatingCircle.scss'

const RatingCircle = () => {

  return (
    <div className="ratingCircle">


      <div className="ratingCircle__quarter quarterItem">
        <div className="quarterItem__wrapper">
          <div className="quarterItem__item quarterItem__1" id="q1"/>
          {/*<div className="quarterItem__item quarterItem__2" id="q2"/>*/}
          <div className="quarterItem__item quarterItem__3" id="q3"/>
          <div className="quarterItem__item quarterItem__4" id="q4"/>
        </div>

      </div>

      <div className="ratingCircle__secondCircle">

      </div>

      <div className="ratingCircle__circle">

      </div>

    </div>
  )
}

export default RatingCircle