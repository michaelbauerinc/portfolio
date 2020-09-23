import React, { FC } from 'react'
import './Background.css'
// import { BackgroundProps } from './Background.Interface'
import background from './background.mp4';

interface BackgroundProps {

}



export const Background: FC<BackgroundProps> = () => {
    const autoPlay: boolean = true;

    // Hacky workaround for iOS loop
    const handleVideoReset = () => {
        let video = (document.getElementById("video") as HTMLVideoElement);
        video.currentTime = 0
        video.play()
    };
    return (
        <div className="background-container">
            <video id="video" src={background} className="background-video" autoPlay={autoPlay} muted={true} playsInline={true} onEnded={handleVideoReset}>
            </video>
        </div>
    )
}

export default Background
