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
            <video className="background-video" autoPlay={autoPlay} muted loop>
                <source src={background} type="video/mp4" />
                <source src={background} type="video/ogg" />
    Your browser does not support the video tag.
        </video>
        </div>
    )
}

export default Background
