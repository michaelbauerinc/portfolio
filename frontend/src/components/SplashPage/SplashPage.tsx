import React, { FC } from 'react'
import './SplashPage.css'
// import { HomeProps } from './Backdrop.Interface'

interface SplashPageProps {

}

export const SplashPage: FC<SplashPageProps> = () => {
    return (
        <div className="splash-page-container">
            <div className="name-container"><h1>Mike</h1><h1>Bauer</h1></div>
            <h2>Full Stack Developer</h2>
        </div >
    )
}

export default SplashPage
