import React, { FC, useState } from 'react'
import './Background.css'
// import { BackgroundProps } from './Background.Interface'
import background from './background.mp4';
interface BackgroundProps {

}

export const Background: FC<BackgroundProps> = () => {
    // SUPER hacky because iOS sucks
    const top = {
        zIndex: -100
    };
    const bottom = {
        zIndex: -200
    }
    const [nextVideo, setNextVideo] = useState(2)
    const [videoOnePosition, setVideoOnePosition] = useState({ zIndex: -100 })
    const [videoTwoPosition, setVideoTwoPosition] = useState({ zIndex: -200 })

    const playNext = () => {
        let video: any = document.getElementById(`video${nextVideo}`)
        if (nextVideo === 2) {
            setNextVideo(1);
            setVideoOnePosition(bottom)
            setVideoTwoPosition(top)
        } else {
            setNextVideo(2);
            setVideoOnePosition(top)
            setVideoTwoPosition(bottom)
        }
        console.log("playing video " + nextVideo)
        video.play()
    }

    return (
        <div>
            <div className="video">
                <video id="video1" className="background-video" style={videoOnePosition} autoPlay={true} muted={true} playsInline={true} preload="auto" onEnded={playNext}>
                    <source src={background} type="video/mp4" />
                    <source src={background} type="video/ogg" />
    Your browser does not support the video tag.
        </video>
            </div>
            <div className="video">
                <video id="video2" className="background-video" style={videoTwoPosition} autoPlay={false} muted={true} playsInline={true} preload="auto" onEnded={playNext}>
                    <source src={background} type="video/mp4" />
                    <source src={background} type="video/ogg" />
    Your browser does not support the video tag.
        </video>
            </div>
        </div>
    )
}

export default Background
