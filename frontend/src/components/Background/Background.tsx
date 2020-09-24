import React, { FC } from 'react'
import './Background.css'
// import { BackgroundProps } from './Background.Interface'
import background from './background.mp4';
import poster from './background.png'
interface BackgroundProps {

}

export const Background: FC<BackgroundProps> = () => {
    return (
        <video className="background-video" autoPlay={true} muted={true} loop={true} playsInline={true} preload="auto" poster={poster}>
            <source src={background} type="video/mp4" />
            <source src={background} type="video/ogg" />
    Your browser does not support the video tag.
        </video>
    )
}

export default Background
