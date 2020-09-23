import React, { FC } from 'react'
import './Background.css'
// import { BackgroundProps } from './Background.Interface'
import background from './background.mp4';

interface BackgroundProps {

}

export const Background: FC<BackgroundProps> = () => {
    const autoPlay = true;
    return (
        <div className="background-container">
            <video src={background} className="background-video" autoPlay={autoPlay} muted={true} loop={true} playsInline={true}>
            </video>
        </div>
    )
}

export default Background
