import React from 'react'
import ReactPlayer from 'react-player'


const VimeoVideo = () => {


  return (
    <div className="App-video">

      <div className="react-player__wrapper">

        <ReactPlayer
          className='react-player'
          url='https://vimeo.com/259411563'
          // width='100%'
          // height='100%'
          controls={true}
          playing={true}
        />

      </div>

    </div>
  )
}

export default VimeoVideo