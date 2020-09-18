import React, { FC } from 'react'
import './SplashPage.css'
import { Link } from 'react-router-dom'

// import { HomeProps } from './Backdrop.Interface'

interface SplashPageProps {

}

export const SplashPage: FC<SplashPageProps> = () => {
    return (
        <div className="splash-page-container">
            <div className="name-container"><h1 className="first-name">Mike</h1><h1 className="last-name">Bauer</h1></div>
            <h2 className="tag">Full Stack Developer</h2>
            <Link to='/home'>
                <button className="enter-button">Lets-a Go</button>
            </Link>
        </div >
    )
}

export default SplashPage
