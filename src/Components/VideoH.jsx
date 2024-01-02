import React, { useRef }  from 'react'
import vid from '../images/share.mp4';
import '../CSSfiles/Video.css'

const VideoH = () => {

    const videoRef = useRef(null);

  const handleVideoClick = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className='child_video'>
            <video
            ref={videoRef}
            src={vid}
            type="video/mp4"
            loop
            controls={false}
            muted

            onClick={handleVideoClick}
        />
  </div>
  )
}

export default VideoH