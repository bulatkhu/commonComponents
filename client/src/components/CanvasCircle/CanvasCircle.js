import React, {useCallback, useEffect, useRef} from 'react'
import './CanvasCircle.scss'


const CanvasCircle = ({right = 1, empty = 6, wrong = 5, width = 40, wrapClassName}) => {
  const refCanvas = useRef(null)
  const colors = ['#27AE60', '#FFC000', '#FF4141']
  const results = new ResultsInPercent(right, empty, wrong)


  function ResultsInPercent(right, empty, wrong) {
    const sum = right + empty + wrong
    this.right = (right / sum).toFixed(3)
    this.empty = (empty / sum).toFixed(3)
    this.wrong = (wrong / sum).toFixed(3)
    this.rightPercentToShow = (this.right * 100).toFixed(0)
  }

  const RatingToOutput = useCallback( function RatingToOutput() {
      const fullCircle = Math.PI * 2
      this.right = { start: 0, end: fullCircle * results.right }
      this.empty = {
        start: fullCircle * results.right,
        end: (fullCircle * results.right) + fullCircle * results.empty,
      }
      this.wrong = {
        start: (fullCircle * results.right) + fullCircle * results.empty,
        end: fullCircle
      }
  },[results])


  useEffect(() => {
    const context = refCanvas.current.getContext('2d')

    colors.forEach((item, index) => {
      const fullCircle = Math.PI * 2
      const rating = new RatingToOutput()

      context.beginPath()
      if (index === 0) {
        context.arc(150, 150, 135,  rating.right.start, rating.right.end )
      } else if (index === 1) {
        context.arc(150, 150, 135, rating.empty.start, rating.empty.end )
      } else {
        context.arc(150, 150, 135, rating.wrong.start, fullCircle )
      }
      context.strokeStyle = colors[index]
      context.lineWidth = width
      context.stroke()
      context.closePath()
    })
  }, [results, refCanvas, colors, RatingToOutput, width])


  return (
    <div className="canvasCircle">

      <div className={["canvasCircle__wrapper", wrapClassName].join(' ')}>
        <canvas className="canvasCircle__circle" ref={refCanvas} height="300" width="300" id="canvas"/>
        <div className="canvasCircle__rating">%{results.rightPercentToShow}</div>
      </div>

    </div>
  )
}

export default CanvasCircle